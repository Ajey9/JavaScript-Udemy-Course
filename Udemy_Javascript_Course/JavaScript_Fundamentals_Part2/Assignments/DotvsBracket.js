const myCountry = {
    country: "Bharat",
    capital: "Delhi",
    language: "Hindi",
    population: 1470000000,
    neighbours: ["Pakistan", "China", "Nepal", "Bhutan", "Srilanka"]
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = 1472000000;
console.log(myCountry.population);

myCountry['population'] = 1472000000 - 2000000;
console.log(myCountry['population']);