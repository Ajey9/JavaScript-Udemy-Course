function addTax(rate) {
  return function (value) {
    return value + value * rate;
  };
}
const addVAT = addTax(0.23);
console.log(addVAT(100));
