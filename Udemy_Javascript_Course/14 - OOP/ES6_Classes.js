class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }

  set FirstName(firstName) {
    this.firstName = firstName;
  }

  get FirstName() {
    return this.firstName;
  }
}

const ajay = new Person("Ajay", "Gathadi");
ajay.fullName();
console.log(ajay);
ajay.FirstName = "AJAY";
console.log(ajay);
console.log(ajay.FirstName);
ajay.FirstName = "ajay";
console.log(ajay);
console.log(ajay.__proto__ === Person.prototype);
