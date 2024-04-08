const simpleObject = {
  a: 1,
  b: 2,
  /*  --- __proto__ sets the [[Prototype]] ---
  It is an another Object literal. 
  */
  __proto__: {
    b: 3,
    c: 4,
  },
};
console.log(simpleObject);
console.log(simpleObject.hasOwnProperty("a", "b"));
console.log(simpleObject.a);
console.log(simpleObject.b);
console.log(simpleObject.c);

const chain1 = Object.getPrototypeOf(simpleObject);
console.log(chain1);
console.log(chain1.hasOwnProperty("c"));
console.log(chain1.isPrototypeOf(simpleObject));
console.log(chain1.b);

const chain2 = Object.getPrototypeOf(chain1);
console.log(chain2);

const chain3 = Object.getPrototypeOf(chain2);
console.log(chain3);
