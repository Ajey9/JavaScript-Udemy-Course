const footBallGameEvents = new Map([
  [17, " Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substituion"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substituion"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

//.Printing unique game events in an array
const events = [...new Set(footBallGameEvents.values())];
console.log(events);
// const events = ["Goal", "Substitution", "Yellow Card", "Red Card"];
// console.log(events);

//2. Deleting Yellow Card of 64 key
console.log(footBallGameEvents);
footBallGameEvents.delete(64);
console.log(footBallGameEvents);

//3. Printing string to the console
console.log(`An event happened, on average, every ${90 / 10} minutes`);

//4.Looping over the events and logging them as they occured in FIRST HALF or SECOND HALF
for (const [key, value] of footBallGameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF] ${key}:${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}:${value}`);
  }
}
