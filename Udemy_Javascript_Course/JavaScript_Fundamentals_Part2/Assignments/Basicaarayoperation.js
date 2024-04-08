const neighbours = ["Pakistan", "China", "Srilanka", "Bhutan", "Nepal"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D'");
}

console.log(neighbours.indexOf("China"));
neighbours[1] = "Republic Of China";
console.log(neighbours); 