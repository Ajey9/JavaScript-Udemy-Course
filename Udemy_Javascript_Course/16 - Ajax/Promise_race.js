const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took long"));
    }, seconds);
  });
};
(async function () {
  const response = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/bharat`),
    getJSON(`https://restcountries.com/v3.1/name/usa`),
    getJSON(`https://restcountries.com/v3.1/name/netherlands`),
  ]);
  timeout(1);
  console.log(response[0]);
})();
