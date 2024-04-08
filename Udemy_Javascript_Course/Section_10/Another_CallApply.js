const vistara = {
  airline: "Vistara",
  iatacode: "VIST",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} has booked a seat on ${this.airline} flight ${this.iatacode}${flightNumber} `
    );
    this.bookings.push(`${this.iatacode}${flightNumber}`, name);
  },
};

// vistara.book(32849237, "Ajay");
book.call(vistara, 32849237, "Ajay");
console.log(vistara);

const airIndia = {
  airline: "Air India",
  iatacode: "AI",
  bookings: [],
};
// vistara.book.call(airIndia, 49859, "Geeta");
// console.log(vistara);
// vistara.book.call(airIndia, 89743857, "Deepak");
// console.log(airIndia);

// //Bind Method
// const airIndiaBooking = vistara.book.bind(airIndia);
// const vistaraBooking = vistara.book.bind(vistara);
// airIndiaBooking(3340897340, "Rutu");
// vistaraBooking(459378, "Shastri");
// console.log(airIndia);
// console.log(vistara);
