//function declaration
function logger() {
    console.log("Learning Javascript functions");
}

logger();
logger();

function management(time, sleep) {
    console.log(`I have ${time} hours in a day, I should be having ${sleep} hours of sleep. `);
}

management(24, 7);

//funtion expressions
goal = function (statement) {
    console.log(statement);
}

goal("All other things are just pure distractions to me if I wanna achieve the lifestyle which I want,other than things which will improve my all aspects of life");

//Arrow function
const age = birthyear => 2023 - birthyear;
console.log(age(1995));

const daysRemaining = days => 30 - days;
console.log(daysRemaining(30));