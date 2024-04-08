function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

function percentageOfWorld1(population) {
    percentage = (population / 7900) * 100;
    return percentage;
}

console.log(describePopulation("Bharat", 1470));