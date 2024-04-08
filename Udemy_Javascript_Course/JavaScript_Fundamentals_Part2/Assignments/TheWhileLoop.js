const populations = [1470, 1400, 990, 880];
const percentages3 = [];

function percentageOfWorld1(population) {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

let counter = 0;
while (counter < populations.length) {
    percentages3.push(percentageOfWorld1(populations[counter]));
    counter++;
}
console.log(percentages3);