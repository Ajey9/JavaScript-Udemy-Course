async function whereAmI(country) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  );
  console.log(response);
}
console.log(whereAmI("india"));
console.log("Ajay Deepak Gathadi");
