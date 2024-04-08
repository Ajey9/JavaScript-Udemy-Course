const CWC2023Final = {
    players:[[
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
      ]
    ]
}


const teamIndia = "India";
const teamIndiaCaptain = players1[0];
const teamIndiaFieldPlayers = [...players1];

const teamAustralia = "Australia";
const teamAustraliaCaptain = players2[0];

const allPlayers = [...players1, ...players2];
const teamIndiaFinalPlayers = [
  ...players1,
  "Shardul Thakur",
  "Prasidh Krishna",
  "Ishan Kishan",
];

function scores(...players) {
  console.log(players);
}

scores(100);
