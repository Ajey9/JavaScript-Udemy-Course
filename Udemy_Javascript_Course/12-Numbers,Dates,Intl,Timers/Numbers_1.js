console.log(1 / 10);
console.log(0.1 + 0.2);

/* Conversion of String data to Number */
console.log(typeof +"9");

/* Parsing */
console.log(Number.parseInt("9points"));
console.log(Number.parseInt("Deepak25"));

/* Biggest Number till 53 Bits */
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

/* BIg Integer */
console.log(44564878795413214546877n);
console.log(BigInt(456879421321264589787546542313156545797878764321));

/* Dates */
console.log(new Date().toISOString());
console.log(Date.now());

/*
const movementDates = [
  "2023-12-1T07:59:01.921Z",
  "2023-12-2T07:59:01.921Z",
  "2023-12-3T07:59:01.921Z",
  "2023-12-4T07:59:01.921Z",
  "2023-12-6T07:59:01.921Z",
  "2023-12-8T07:59:01.921Z",
  "2023-12-10T07:59:01.921Z",
  "2023-12-12T07:59:01.921Z",
  "2023-12-15T07:59:01.921Z",
];
const dates = new Date(movementDates);
console.log(dates);
movementDates.forEach(function () {
  const day = dates.getDate();
  const month = dates.getMonth() + 1; //Months are 0 index based
  const year = dates.getFullYear();
  const displayDates = `${day}-${month}-${year}`;
  console.log(displayDates);
});
*/
const date = new Date("2023-12-1").getDate();
console.log(date);
