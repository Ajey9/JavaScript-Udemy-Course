"use strict";

let promiseCount = 0;

function testPromise() {
  const thispromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  log.insertAdjacentHTML("beforeend", `${thispromiseCount}) Started<br>`);

  const promise1 = new Promise((resolve, reject) => {
    log.insertAdjacentHTML(
      "beforeend",
      `${thispromiseCount} Promise Constructor<br>`
    );

    setTimeout(() => {
      resolve(thispromiseCount);
    }, 3000);
  });
}

promise1
  .then((response) => {
    log.insertAdjacentHTML("beforeend", `${response} Promise Fullfilled<br>`);
  })
  .catch((reason) => {
    console.log(`Handle rejected promise (${reason}) here.`);
  });
log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);

const button = document.getElementById("make-promise");
button.addEventListener("click", testPromise);
