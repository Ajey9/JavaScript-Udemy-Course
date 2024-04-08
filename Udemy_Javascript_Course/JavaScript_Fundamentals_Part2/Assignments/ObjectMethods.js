const myCountry = {
    country: "Bharat",
    capital: "Delhi",
    language: "Hindi",
    population: 1470000000,
    neighbours: ["Pakistan", "China", "Nepal", "Bhutan", "Srilanka"],
    describe: function () {
        return `My country is ${this.country} and its capital city is ${this.capital}, ${this.language} is the National language of ${this.country}, and it's popolation is ${this.population}`;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
// console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);
console.log(myCountry.isIsland);