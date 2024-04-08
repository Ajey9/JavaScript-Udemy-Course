const THRESHOLD = 5;

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInteger = Date.now();
    const value = randomInteger % 10;

    console.log(`Random Integer generated is : ${randomInteger}`);
    console.log(`The value is: ${value}`);

    if (value < THRESHOLD) {
      resolve(value);
      console.log(`Promise is resolved as value is: ${value}`);
    } else {
      reject(`Too Large: ${value}`);
    }
  }, 1000);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  if (isOdd) {
    console.log(`The value is odd`);
  } else {
    console.log(`The value is even`);
  }
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const error = new Error("Trouble getting number", { cause: reason });
  console.error(error);
  throw error;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;

    if (value >= THRESHOLD) {
      reject(`Still To large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "Odd" : "Even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value},${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.log(`Had Previously handled error`);
    } else {
      console.error(`Troubled with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
