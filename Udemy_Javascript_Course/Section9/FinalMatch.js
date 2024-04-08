const CWC2023Final = {
  /*
  players: [
    [
      "Rohit Sharma",
      "Shubhman Gill",
      "Virat Kohli",
      "Shreays Ayyer",
      "K L Rahul",
      "SuryaKumar Yadav",
      "Ravindra Jadeja",
      "Mohammad Shami",
      "Jasprit Bumrah",
      "Mohammad Siraj",
      "Kuldeep Yadav",
    ],
    [
      "Pat Cummnis",
      "Travis Head",
      "David Warner",
      "Mithcell Marsh",
      "Steve Smith",
      "Glenn Maxwell",
      "Marnus Labuschagne",
      "Mitchell Starc",
      "Adam Zampa",
      "Josh Inglis",
      "Josh Hazlewood",
    ],
  ],
  dateOftheFinalMatch: "19th November 2023",
  */
  scores: {
    indiaScore: "240",
    australiaScore: "241",
  },
  /*scoreBoard: {
    indiaScoreBorad: {
      "Rohit Sharma": 47,
      "Shubhman Gill": 4,
      "Virat Kohli": 54,
      "Shreays Ayyer": 4,
      "K L Rahul": 66,
      "SuryaKumar Yadav": 18,
      "Ravindra Jadeja": 9,
      "Mohammad Shami": 6,
      "Jasprit Bumrah": 1,
      "Mohammad Siraj": 9,
      "Kuldeep Yadav": 10,
    },
    australiaScoreBoard: {
      "Pat Cummnis": NaN,
      "Travis Head": 137,
      "David Warner": 7,
      "Mithcell Marsh": 15,
      "Steve Smith": 4,
      "Glenn Maxwell": 2,
      "Marnus Labuschagne": 58,
      "Mitchell Starc": NaN,
      "Adam Zampa": NaN,
      "Josh Inglis": NaN,
      "Josh Hazlewood": NaN,
    },
  },
  //   fiftyScoredBy: {
  //     indian: ["Virat Kohli", "K L Rahul"],
  //     australian: "Marnus Labuschagne",
  //   },
  //   centuryScoredBy: {
  //     indian: null,
  //     australia: "Travis Head",
  //   },
  matchResult: "Australia won the World Cup",
  */
};

//1. Printing the scores of both the teams.
console.log(
  `India has scored ${CWC2023Final.scores.indiaScore} Runs in 50 Overs.\nAustralia has scored ${CWC2023Final.scores.australiaScore} Runs in 50 Overs.`
);

console.log();
//2.Iterating over the score object
const s = Object.entries(CWC2023Final.scores);
for ([team, score] of s) {
  console.log(`Key is "${team}" and it's value is ${score}`);
}

//3.Printing Australia won based on value of australiaScore key.
// for (let i = 1; i < Object.values(CWC2023Final.scores).length; i++) {
//   if (
//     Object.values(CWC2023Final.scores[i]) >
//     Object.values(CWC2023Final.scores[i - 1])
//   ) {
//     console.log(`Team Australia has won the world cup`);
//   } else {
//     console.log(`Team India has won the world cup`);
//   }
// }

console.log(Object.keys(CWC2023Final.scores));
