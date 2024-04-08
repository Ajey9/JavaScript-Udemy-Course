const bookings = [];
function ticketBooking(
  flightNumber,
  numberOfPassengers,
  price = 1000 * numberOfPassengers
) {
  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  bookings.push(booking);
}
ticketBooking("MUM34", 1);
ticketBooking("Chennai345", 0, 2000);
console.log(bookings);
