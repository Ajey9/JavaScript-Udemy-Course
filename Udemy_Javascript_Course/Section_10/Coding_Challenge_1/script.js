const poll = {
  question: "What is your favourite Programming Language?",
  options: ["0: Java", "1: JavaScript", "2: HTML", "3.SQL"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const response = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write Option Number)`
      )
    );

    typeof response === "number" &&
      response < this.answers.length &&
      this.answers[response]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

console.log(poll.answers);
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 1, 4, 5] }, "string");
