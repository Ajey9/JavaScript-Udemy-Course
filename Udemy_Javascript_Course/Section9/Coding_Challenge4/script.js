"use strict";

document.querySelector(".Convert").addEventListener("click", function () {
  const string = document.querySelector(".text").value;
  const lower = string.trim().toLowerCase().split("_");

  for (const s of lower) {
    const [first, second] = string.trim().toLowerCase().split("_");
    const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    console.log(output);
  }
});

/*
 first_Name
Some_variable
  calculate_Age
delayed_departure
*/
