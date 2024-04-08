const array = [1, 2, 3];
console.log(array);
const array_1 = [...array, 4, 5, 6, 7, 8, 9];
console.log(array_1);

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

const newMenu = [...restaurant.mainMenu, "Agri Mutton"];
console.log(`New Menu is: ${newMenu}`);

const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`Combined menu is ${combinedMenu}`);

const ingredients = ["Raita", "Pineapple juice", "Chass"];
restaurant.orderThali(1, ...ingredients);

// const string = "Ajay Geeta Deepak Gathadi";
// const stringArray = [...string];
// console.log(stringArray);
// console.log(...string);

//Copying objects into new objects with additional information using spread operator
const newRestaurant = {
  ...restaurant,
  founder: "Ajay Gathadi",
  revenue: "1 Crore Rupees",
};
console.log(newRestaurant);
