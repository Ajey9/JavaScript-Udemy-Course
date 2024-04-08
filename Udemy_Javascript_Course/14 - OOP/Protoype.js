function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ajay = new Person("Ajay", "Gathadi");
console.log(ajay);

console.log(Person.prototype);
Person.prototype.fullName = function () {
  console.log(this.firstName + this.lastName);
};
console.log(Person.prototype);
ajay.fullName();
console.log(ajay.__proto__);
console.log(ajay.hasOwnProperty("firstName"));

Person.prototype.gender = "Male";
console.log(ajay.__proto__.__proto__);
