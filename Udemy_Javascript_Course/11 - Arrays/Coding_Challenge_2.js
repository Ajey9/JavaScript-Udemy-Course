// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// function calcAverageHumanAge(dogsAges) {
//   const dogsHumanAge = dogsAges
//     .map((currentDogAge) =>
//       currentDogAge <= 2 ? 2 * currentDogAge : 16 + currentDogAge * 4
//     )
//     .filter((currentDog) => (currentDog >= 18 ? currentDog : ""));

//   const average =
//     dogsHumanAge.reduce(
//       (accumulator, currentDog) => accumulator + currentDog,
//       0
//     ) / dogsHumanAge.length;
//   return average;
// }

//Arrow Function
const calcAverageHumanAge = (dogsAges) =>
  dogsAges
    .map((currentDog) =>
      currentDog <= 2 ? currentDog * 2 : 16 + currentDog * 4
    )
    .filter((currentDog) => currentDog >= 18)
    .reduce(
      (accumulator, currentDog, index, arrays) =>
        accumulator + currentDog / arrays.length,
      0
    );
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
