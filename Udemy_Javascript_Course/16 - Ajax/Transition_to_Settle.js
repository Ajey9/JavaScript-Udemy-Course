/*
const promiseA = new Promise(function (resolve, reject) {
  console.log("Ajay Gathadi");
  resolve("Heyy");
});

const promiseB = promiseA.then((response) => console.log("Hey ", response));
const promiseC = promiseA.then((response) => console.log("Heyyy", response));
console.log(promiseA);
*/

/* ---------- */

/*
const promiseD = new Promise((resolve, reject) => {
  resolve(9);
});
console.log(promiseD);

promiseD.then((response) =>
  console.log("Asynchronous Logging has a value ", response)
);
console.log("Immediate Logging");
*/

/*
const thenAble = {
  then(onFullfilled, onRejected) {
    onFullfilled({
      then(onFullfilled, onRejected) {
        onFullfilled(9);
      },
    });
  },
};
console.log(Promise.resolve(thenAble));
*/

// console.log(Promise.prototype.constructor);
// console.log(Promise.prototype.toString);

const promiseE = new Promise(function (resolve, reject) {
  resolve(9);
  reject(10);
});

promiseF = promiseE.catch((response) => console.log(response));
console.log(promiseE);
console.log(promiseF);

promiseG = promiseF.finally((response) => console.log(response));
console.log(promiseG);
