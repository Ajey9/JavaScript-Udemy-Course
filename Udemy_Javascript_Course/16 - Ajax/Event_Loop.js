console.log("Testing of Event Loop started");
setTimeout(() => console.log("5 second timer"), 5);
Promise.resolve("Resolved Promise 3").then((response) => {
  for (let i = 1; i < 2000; i++) console.log(i);
  console.log(response);
});
Promise.resolve("Resolved Promise 1").then((response) => console.log(response));
Promise.resolve("Resolved Promise 2").then((response2) => {
  for (let i = 0; i < 1000; i++) console.log(i);
  console.log(response2);
});

console.log("Testing of Event Loop ended");
