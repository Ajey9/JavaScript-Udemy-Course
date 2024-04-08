const wait = (milliSeconds) =>
  new Promise((resolve) => setTimeout(resolve, milliSeconds));

// wait(3 * 1000).then(() => console.log("3 Seconds passed"));
wait(0).then(() => console.log("Wait = 0"));
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"));
  console.log(3);
