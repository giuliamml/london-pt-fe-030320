const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

let timers = document.querySelector(".timers");

function createTimerEl(localTimersCount) {
  let timer;
  let allTimers;
  //check if timersCount is less than 5
  if (localTimersCount < 5) {
    let currentIdx = localTimersCount;

    //Create a new `timer` html element and set the class and html
    timer = document.createElement("div");
    timer.classList = `timer timer_${localTimersCount}`;
    timer.innerHTML =
      ' <div class=remove></div><h3>0 <span>00</span></h3><div class="btn"><button class="reset">Reset</button><button class="stop">Stop</button></div>';

    //append new timer to body
    timers.append(timer);

    //set timer
    let myTimer = setTimer(localTimersCount);

    //reset timer
    let resetButton = document.querySelector(
      `div.timer_${localTimersCount} button.reset`
    );

    resetButton.addEventListener("click", function resetTimer() {
      clearInterval(myTimer);
      allTimers = Array.from(document.querySelectorAll("div.timers>div"));
      currentIdx = allTimers.findIndex((el) => el === timer);
      myTimer = setTimer(currentIdx);
      console.log();
    });

    stopButton = document.querySelector(
      `div.timer_${localTimersCount} button.stop`
    );

    stopButton.addEventListener("click", function resetTimer() {
      clearInterval(myTimer);
    });

    //remove timer
    removeButton = document.querySelector(`.timer_${localTimersCount} .remove`);
    removeButton.addEventListener("click", (e) => {
      timer.remove();
      console.log("global: ", timersCount, timer);
      timersCount--;

      //renaming new timer added
      allTimers = Array.from(document.querySelectorAll("div.timers>div"));
      allTimers.forEach((timer, idx) => {
        timer.classList = `timer timer_${idx}`;
      });
    });
    timersCount++;
  }

  return timer;
}

//button event to create new timers

addCounterEl.addEventListener("click", (e) => {
  createTimerEl(timersCount);
});

//setTimer sets the timer to h3 and span
function setTimer(i) {
  let time = 0;
  let h3 = document.querySelector(`div.timer_${i} h3`);
  let span = document.createElement("span");

  let myTimer = setInterval(function() {
    time = time + 10;
    let newArray = (time / 1000)
      .toFixed(2)
      .toString()
      .split(".");
    h3.innerText = `${newArray[0]}`;
    span.innerText = `${newArray[1]}`;
    h3.append(span);
  }, 10);

  return myTimer;
}
