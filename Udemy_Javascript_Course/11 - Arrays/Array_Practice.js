function camelCase(string) {
  const stringArray = string.split(" ");

  const Exceptions = ["and", "in", "the", "is", "of"];

  const camelCaseString = stringArray
    .map((word) =>
      Exceptions.includes(word)
        ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  console.log(camelCaseString);
}

camelCase(
  "Ajay Gathadi is pushing the limits and chasing Excellence in all aspects of his life"
);
