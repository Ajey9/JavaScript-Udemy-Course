console.log(this);

const calculateAge = function (birthYear) {
  console.log(2030 - birthYear);
  console.log(this);
};

calculateAge(1995);

const calculateAge_Arrow = (birthYear) => {
  console.log(2025 - birthYear);
  console.log(this);
};
calculateAge_Arrow(1995);

var fname = "Ajay Geeta Deepak Gathadi";
const ajay = {
  fname: "Ajay Geeta Deepak Gathadi",
  birthYear: 1995,
  calculateAge1: function (birthYear) {
    console.log(this.birthYear);

    const self = this; //This is called as Preserving the "this"
    const isMillineal = () => {
      console.log(2025 - self.birthYear);
    };
    isMillineal();
  },
  intro: () => {
    console.log(`Hey ${this.fname}`);
  },
};
ajay.calculateAge1();
ajay.intro();
