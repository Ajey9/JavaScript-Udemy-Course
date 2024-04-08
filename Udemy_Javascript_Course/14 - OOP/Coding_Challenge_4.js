/* 
    ----- Coding Challenge 4 -----
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(` Accelerator Pressed...
    Now ${this.make} is going at ${this.speed} KM/H`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Brake Pressed...
    Now ${this.make} is going at ${this.speed} KM/H`);
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(` Accelerator Pressed...
    Now ${this.make} is going at ${
      this.speed
    } KM/H and the current charging is ${this.#charge}`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`Brake Pressed...
    Now ${this.make} is going at ${this.speed} KM/H`);
    return this;
  }

  chargeTo(charging) {
    this.#charge = charging;
    console.log(`${this.make} has been charged to the ${this.#charge} %`);
    return this;
  }
}

const ev = new EV("Bentley", 130, 34);
console.log(ev);
console.log(ev.chargeTo(90));

console.log(ev.accelerate().brake().chargeTo(34));
