const promise = new Promise((resolve, reject) => {
  console.log("Promise Callback");
  resolve();
}).then((result) => {
  console.log("Promise Callaback in .then");
});

setTimeout(
  () => console.log("Event-Loop cycle: Promise (fulfilled)", promise),
  3000
);

console.log("Promise Pending", promise);
