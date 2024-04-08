// console.log(undefined || 0 || "" || "Ajay" || 9 || null);
// console.log(0 && "Ajay");
// console.log(1 && "Ajay");
// console.log(0 || null);
// console.log("AJay" || 0);

// console.log(0 && null);
// console.log(null && 0);
// console.log(1 && 0);
// console.log(null && 1);
// console.log(1 && "Ajay");
// console.log(0 && "Ajay");

// console.log(0 || "AJay" || null);
// console.log(undefined || null || 0);
// console.log(0 && undefined && null);
// console.log((0 && "Ajay") || "Ajay Gathadi");

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
  order(starterMenuIndex, mainMenuIndex) {
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

const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (food of combinedMenu) console.log(food);

for ([location, element] of combinedMenu.entries()) {
  console.log(`${location + 1}: ${element} `);
}

/*
console.log(restaurant && restaurant.Rname);
console.log(restaurant.order && restaurant.order(1, 1));
console.log(restaurant.categories && restaurant.categories);
restaurant.delivery && restaurant.delivery("Manan", 0, "21:00");

console.log(restaurant.Rname ?? "Gathadi Savji Hotel");
console.log(restaurant.order ?? restaurant.order(1, 1));
*/
