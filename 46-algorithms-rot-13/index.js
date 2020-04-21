let encrypt = document.querySelector("#encrypt");
let decrypt = document.querySelector("#decrypt");
let result = document.querySelector("p.result");

encrypt.addEventListener("click", (e) => {
  let string = document.querySelector("textarea").value;
  result.innerText = encryptString(string);
});

decrypt.addEventListener("click", (e) => {
    let string = document.querySelector("textarea").value;
  result.innerText = decryptString(string);
});

function encryptString(str) {
  var originalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var encryptedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  var getIndex = (letter) => originalAlphabet.indexOf(letter);

  var getTranslation = (letter) =>
    getIndex(letter) > -1 ? encryptedAlphabet[getIndex(letter)] : letter;

  return str
    .split("")
    .map(getTranslation)
    .join("");
}

function decryptString(str) {
  var originalAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  var encryptedAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  var getIndex = (letter) => originalAlphabet.indexOf(letter);

  var getTranslation = (letter) =>
    getIndex(letter) > -1 ? encryptedAlphabet[getIndex(letter)] : letter;

  return str
    .split("")
    .map(getTranslation)
    .join("");
}
