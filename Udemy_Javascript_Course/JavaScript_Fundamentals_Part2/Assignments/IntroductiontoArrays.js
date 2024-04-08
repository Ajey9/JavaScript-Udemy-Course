const populations = [1470, 1400, 990, 880];
if (populations.length === 4) {
    console.log("True");
}
else {
    console.log("False");
}

function percentageOfWorld1(population) {
    percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);