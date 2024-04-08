"use strict";

function businesses(businessName) {
  console.log(
    `${this.name} has founded a ${businessName} business and their current age is ${this.age}`
  );
  this.business.push(businessName);
}

const person1 = {
  name: "Ajay Deepak Gathadi",
  age: 27,
  business: [],
};

const person2 = {
  name: "Deepak Dattatray Gathadi",
  age: 52,
  business: [],
};

const person3 = {
  name: "Geeta Deepak Gathadi",
  age: 50,
  business: [],
};
businesses.call(person1, "Online Marketting");
businesses.call(person2, "Grocery");
businesses.call(person3, "Shoe Store");
