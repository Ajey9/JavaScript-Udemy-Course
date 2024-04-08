const names = ["Gathadi", "Deepak", "Ajay"];
names.sort((a, b) => {
  if (b > a) {
    return -1;
  } else if (a > b) {
    return 1;
  }
});
console.log(names);

const numbers = [-10, 9, 8, -7, 6, -5, 4, -3, 2, -1, 0];

console.log(numbers.sort()); //Does the sorting of arrays treating numbers as a string
numbers.sort((a, b) => {
  if (a < b) {
    return -1;
  } else return 1;
});

console.log(numbers);
