const parent = {
  value: 9,
  increase() {
    return this.value + 1;
  },
};
console.log(parent);
console.log(parent.increase());

const child = {
  __proto__: parent,
};
console.log(child);
console.log(child.increase());

child.value = 19;
console.log(child.increase()); //In increase "this.value" means 19

console.log(Object.getPrototypeOf(parent) === Object.prototype);

/* ----- From MDN Blogs: Inspecting prototype:A deeper dive ----- */

function doSomething() {}
doSomething.prototype.action = "45 Minutes Sessions 4 times";

const instance = new doSomething();
instance.attention = "Wherever the attention goes, energy flows";
console.log(instance);
console.log("instance.attention : ", instance.attention);
console.log("dosomething.action : ", doSomething.action);
console.log("instance.action : ", instance.action);
console.log("dosSomething.prototype : ", doSomething.prototype);
console.log("doSomething.prototype.action : ", doSomething.prototype.action);
console.log("instance.prototype: ", instance.prototype);
