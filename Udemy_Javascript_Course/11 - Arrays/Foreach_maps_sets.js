const currencyMap = new Map([
  ["INR", "INDIA"],
  ["USD", "United States"],
  ["EURO", "Europe"],
  ["Dinar", "Saudi Arabia"],
]);

currencyMap.forEach(function (currentElement, currentElementIndex, entireMap) {
  console.log(`${currentElementIndex} : ${currentElement}`);
});

const familyRelationship = new Set([
  "Father",
  "Deepak Gathadi",
  "Mother",
  "Geeta Gathadi",
  "Son",
  "Aditya Gathadi",
  "Son",
  "Ajay Gathadi",
  "Son",
  "Himanshu Gathadi",
]);
console.log(familyRelationship);

familyRelationship.forEach(function (value, _, entireSet) {
  console.log(`${value}: ${_}: ${entireSet}`);
});
