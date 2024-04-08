/*
const ajayg = "ajay dEEpak gaThadi";
const differ = ajayg.toLowerCase().split(" ");
const ajaygathadi = [];

for (a of differ) {
  ajaygathadi.push(a[0].toUpperCase() + a.slice(1));
}
console.log(ajaygathadi.join(" "));
*/

function cardNumberMasking(cardNumber) {
  const cardNumberString = cardNumber + "";
  const first2Digits = cardNumberString.slice(0, 2);
  const last4Digits = cardNumberString.slice(-4);
  const maskedCardNumber = 
//   first2Digits.padEnd(cardNumberString.length, "*");
  last4Digits.padStart(cardNumberString.length, "*");
  console.log(maskedCardNumber);
}

cardNumberMasking(12345678);
