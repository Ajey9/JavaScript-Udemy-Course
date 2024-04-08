// const greeting = function (greet) {
//   return function (name) {
//     console.log(`${greet} ${name}`);
//   };
// };

const greeting = (greet) => (name) => console.log(`${greet} ${name}`);

// const func = greeting("Heyyy ");
// func("Ajjjayyyyy !");

greeting("Hheeeyyy")("AJ");
