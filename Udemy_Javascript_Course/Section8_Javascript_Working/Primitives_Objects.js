const rutu = {
  firstName: "Rutu",
  place: "Thane",
  friends: ["Ajay"],
};

const Rutu = Object.assign({}, rutu);
Rutu.place = "My Lap";
Rutu.friends.pop("Ajay");
Rutu.friends.push("Aditya", "Trupti");
console.log(rutu);
console.log(Rutu);
