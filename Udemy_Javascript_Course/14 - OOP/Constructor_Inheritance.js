function Person(names, birthYear) {
  this.names = names;
  this.birthYear = birthYear;
}

Person.prototype.age = function () {
  console.log(2024 - this.birthYear);
};

const person1 = new Person("Ajay Gathadi", 1995);
console.log(person1);

function Student(names, birthYear, course) {
  Person.call(this, names, birthYear);
  {
    this.course = course;
  }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduction = function () {
  console.log(`I am ${this.names} and I am studying ${this.course}`);
};

const student = new Student("Rutu Shastri", 2000, "Computer Science");
console.log(student);

student.introduction();
student.age();
