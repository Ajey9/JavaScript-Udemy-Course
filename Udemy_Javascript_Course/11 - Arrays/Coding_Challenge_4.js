const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

/* --- Task 1 --- */

dogs.forEach(
  (currentDog) => (currentDog.recommendedFood = currentDog.weight ** 0.75 * 28)
);
console.log(dogs);

/* ---Task 2---  */

console.log("------------------- Sarah's Dog--------------------------");
const found = dogs.findIndex((currentDog, index, dogs) =>
  currentDog.owners.includes("Sarah")
);

const sarahDog = dogs.filter((currentDog) =>
  currentDog.owners.includes("Sarah")
);
// .map((currentDog) =>
//   currentDog.curFood > currentDog.recommendedFood
//     ? "This dog is eating too little"
//     : "This dog is eating too much"
console.log(sarahDog);

console.log(
  `Sarah's dog eat too ${
    sarahDog.curFood > sarahDog.recommendedFood ? "much" : "little"
  }`
);

/* ---Task 3 ---*/
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.flatMap((currentDog) =>
  currentDog.curFood > currentDog.recommendedFood
    ? ownersEatTooMuch.push(currentDog.owners)
    : ownersEatTooLittle.push(currentDog.owners)
);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

/* --- Task 4 --- */

const ownersEatTooMuch1 = ownersEatTooMuch.flat();
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);

/* --- Task 5 --- */
console.log(
  `${dogs.some(
    (currentDog) => currentDog.curFood === currentDog.recommendedFood
  )}`
);

/* --- Task 6 --- */
console.log(
  `${dogs.some(
    (currentDog) =>
      currentDog.curFood > currentDog.recommendedFood * 0.9 &&
      currentDog.curFood < currentDog.recommendedFood * 1.1
  )}`
);

/* --- Task 7 --- */
console.log("----- Array of dogs eating in OKAY Amount -----");
const dogEatingOKAY = dogs.filter(
  (currentDog) =>
    currentDog.curFood > currentDog.recommendedFood * 0.9 &&
    currentDog.curFood < currentDog.recommendedFood * 1.1
);
console.log(dogEatingOKAY);

/* --- Task 8 --- */
console.log(
  " -------------- Dogs recommended food in Ascending Order ---------------"
);
// const shallowDogs = dogs
//   .map((currentDog) => currentDog.recommendedFood)
//   .sort((a, b) => (a < b ? -1 : 1));
// shallowDogs.sort((a, b) => (a < b ? -1 : 1));

const Dogs = [...dogs];
const Ascending = Dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(Ascending);
