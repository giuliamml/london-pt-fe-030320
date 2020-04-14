const productsContainer = document.querySelector("#products");
let budget = 50;
let cart = document.querySelector("div#cart");

for (let i = 0; i < products.length; i++) {
  //create div for each product
  let productsDiv = document.createElement("div");
  productsDiv.className = "products_div";
  productsContainer.appendChild(productsDiv);

  //render imgs
  //console.log(products[i].img);
  let img = document.createElement("img");
  img.src = products[i].img;
  productsDiv.appendChild(img);

  //render names
  let names = document.createElement("h3");
  names.innerText = products[i].name;
  productsDiv.appendChild(names);

  //rended prices
  let prices = document.createElement("p");
  prices.innerText = products[i].price;
  productsDiv.appendChild(prices);

  //render select quantities
  let selectList = document.createElement("select");
  selectList.className = "my_select";
  productsDiv.appendChild(selectList);

  for (var idx = 0; idx <= products[i].max_quantity; idx++) {
    let quantities = document.createElement("option");
    //console.log(quantities);
    quantities.value = idx;
    quantities.innerText = idx;
    //console.log(quantities.value);
    selectList.appendChild(quantities);
  }

  //get quantities selected
  setSelectorListener(selectList, i);
}

function setSelectorListener(el, idx) {
  el.addEventListener("change", (event) => {
    products[idx].current = event.target.value;

    console.log(calcRemainingBudget());
  });
}

function totalBudget(acc, product) {
  acc += product.price * product.current;
  return acc;
}

function calcRemainingBudget() {
  let expenses = products.reduce(totalBudget, 0);
  let span = document.querySelector("#remaining > span");

  if (expenses > 50) {
    createError();
    setTimeout(error, 3000);
    
  } else if (expenses < 50) {
    span.innerText = `£${(budget - expenses).toFixed(2)}`;
  }

  return budget - expenses;
}

var error = () => {
  alert = document.querySelector("div.error");
  alert.remove();
};

function createError() {
  alert = document.createElement("div");
  alert.className = "error";
  alert.innerText = "Not enough money left for that!";
  alert.id = "error";
  cart.append(alert);
}
