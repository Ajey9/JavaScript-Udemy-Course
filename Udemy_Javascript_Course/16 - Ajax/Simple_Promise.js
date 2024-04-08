let random = Math.random();
const simplePromise = new Promise(function (resolve, reject) {
  console.log(
    "The data is getting saved in Database, Expected wait : 5 Seconds"
  );
  setTimeout(function () {
    if (random >= 0.5) {
      console.log(random);
      resolve("Data has been saved successfully into the database");
    } else {
      console.log(random);
      reject(new Error("Oops!, Some issue happened while saving the data"));
    }
  }, 5000);
});

simplePromise
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
