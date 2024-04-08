// const ajay = new Map();
// ajay.set("name", "Mr. Ajay Deepak Gathadi");
// ajay.set(
//   0,
//   "Ajay is realising that discipline is what's going to achieve him the result and he is following the discipline"
// );
// ajay
//   .set(2, "Ajay completed 13 days of semen retention today")
//   .set("date", "23rd November 2023")
//   .set(true, "Ajay is mascular");
// console.log(ajay);
// console.log(ajay.has("name"));
// ajay.clear();
// console.log(ajay);

const gathadi = [
  ["familyName", "Gathadi"],
  [1, "Discipline"],
  [2, "Home Buying"],
  [3, "Huge Investment"],
  [4, "Setting Example"],
];
console.log(gathadi);
for (const [key, value] of gathadi) {
  if (typeof key === "number") {
    console.log(`${key}:${value}`);
  }
}

console.log([...gathadi]);
console.log(...gathadi.keys());
console.log(...gathadi.values());
