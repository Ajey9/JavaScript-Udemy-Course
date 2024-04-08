const populations = [1470, 1400, 990, 880];
const percentages2 = [];

function percentageOfWorld1(population) {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

for (let counter = 0; counter < populations.length; counter++) {
    percentages2.push(percentageOfWorld1(populations[counter]));
}
console.log(percentages2);
