function addition(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/*
const array = [1, 2, 3, 4, 5, 6];
const [a, b, ...otherElements] = array;
console.log(a, b, otherElements);

const string = ["Ajay", "Geeta", "Deepak", "Gathadi"];
const [c, d, ...other] = string;
console.log(a, b, other);

const restaurant = {
  Rname: "Hotel Gathadi Savji",
  location: "Khadakpada, Kalyan West",
  categories: [
    "Maharastrian",
    "South Indian",
    "Punjabi",
    "Italian",
    "Spanish",
    "Japnese",
  ],
  starterMenu: ["Manchurian", "Juice", "Masala Papad"],
  mainMenu: ["Veg Thali", "Non-Veg Thali"],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  openingTime: {
    Saturday: {
      Open: 17,
      Close: 24,
    },
    Sunday: {
      Open: 16,
      Close: 23,
    },
  },

  delivery: function ({
    address = "101 Manan Apartment, Pawan Stotra",
    mainMenuIndex,
    time = "20:00 Hours",
  }) {
    console.log(`Your Order has been received!
        Your ${this.mainMenu[mainMenuIndex]} will be delivered to you at ${time} on your address ${address}`);
  },

  orderThali: function (mainMenuIndex, ingredient1, ingredient2, ingredient3) {
    console.log(
      `Your ${this.mainMenu[mainMenuIndex]} is ready with ${ingredient1}, ${ingredient2} and ${ingredient3} `
    );
  },
};

const [e, , f, ...otherFoods] = [
  ...restaurant.categories,
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(e, f, otherFoods);

//Objects REST pattern
const [Rname, location, ...restData] = restaurant;
// console.log(rname, location, restData);
console.log(restData);

// const [Maharastrian, Punjabi, ...restCategory] = restaurant.categories;
// console.log(Maharastrian, Punjabi, restCategory);

*/
