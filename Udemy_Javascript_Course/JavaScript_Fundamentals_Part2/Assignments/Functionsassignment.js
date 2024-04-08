function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Bharat", 1470, "Delhi"));
console.log(describeCountry('US', 50, 'NewYork'));
console.log(describeCountry('SriLanka', 10, 'Colombo'));

function percentageOfWorld1(population) {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

const bharat = percentageOfWorld1(1470);
console.log(bharat);

const sriLanka = percentageOfWorld1(10);
console.log(sriLanka);

const nepal = percentageOfWorld1(5);
console.log(nepal);

const percentageofWorld2 = function (population) {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

const Bharat = percentageofWorld2(1470);
console.log(Bharat)

const percentageOfWorld3 = population => {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}
console.log(percentageOfWorld3(1470));