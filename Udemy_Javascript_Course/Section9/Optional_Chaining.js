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
      Open: "17:00",
      Close: "24:00",
    },
    Sunday: {
      Open: "16:00",
      Close: "23:00",
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

// console.log(restaurant?.Rname);
// console.log(restaurant?.openingTime?.Saturday?.Open);
// console.log(restaurant?.order?.(0, 1));

// restaurant?.delivery?.({
//   address: "Pawan Stotra Aprtment, Manan 101",
//   mainMenuIndex: 1,
//   time: "17:30 Hours",
// });

console.log(Object.keys(restaurant));
console.log(Object.values(restaurant));
console.log(Object.entries(restaurant));
