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
};
restaurant.delivery({
  mainMenuIndex: 1,
  time: "21:00 Hours",
  // address: "Pawan Stotra, 101 Manan apartment",
});

//Destructuring the arrays
const [starter, main] = restaurant.order(1, 1);
console.log(starter, main);

//Destructuring the Objects
const { Rname, location, openingTime } = restaurant;
console.log(Rname, location, openingTime);

const { Rname: RestaurantName } = restaurant;
console.log(RestaurantName);

const { menu = [], starterMenu: starters } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 9;
let b = 22;

const obj = { a: 99, b: 23, c: 98 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const { Saturday } = openingTime;
console.log(Saturday);

const {
  Saturday: { Open, Close },
} = openingTime;
console.log(Open, Close);
