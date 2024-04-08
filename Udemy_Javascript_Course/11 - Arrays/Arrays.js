const array = ["A", "J", "A", "Y"];

console.log(array.slice(0));
console.log(array.slice(1, 5));
console.log(array.slice(-5));

const array_1 = ["Ajay", "Geeta", "Deepak", "Gathadi"];
array_1.splice(1, 1);
console.log(array_1);

array_1.forEach(function (fname, index, arr) {
  console.log(`${fname} ${index} ${arr}`);
});

console.log(array_1.join(" "));
