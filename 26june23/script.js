"use strict";

let myCurrency = document.getElementById("select");
let myCurrent = document.getElementById("input");
let myValue = document.getElementById("final-value");

myCurrent.addEventListener("keyup", function () {
  if (myCurrency.value === "Dollar") {
    myValue.innerHTML = (myCurrent.value * 1.7).toFixed(2);
  } else if (myCurrency.value === "Sterlin") {
    myValue.innerHTML = (myCurrent.value * 2.16).toFixed(2);
  } else if (myCurrency.value === "Euro") {
    myValue.innerHTML = (myCurrent.value * 1.85).toFixed(2);
  }
});

// let myCurrency = document.getElementById("select");
// let myCurrent = document.getElementById("input");
// let myValue = document.getElementById("final-value");
// let myFinalCurrency = document.getElementById("final-currency");

// myCurrent.addEventListener("keyup", function () {
//   if (myCurrency.value === "Dollar") {
//     myValue.innerHTML = (myCurrent.value / 1.7).toFixed(2);
//     myFinalCurrency.innerHTML = "$";
//   } else if (myCurrency.value === "Euro") {
//     myValue.innerHTML = (myCurrent.value / 1.85).toFixed(2);
//     myFinalCurrency.innerHTML = "€";
//   } else if (myCurrency.value === "Sterlin") {
//     myValue.innerHTML = (myCurrent.value / 2.16).toFixed(2);
//     myFinalCurrency.innerHTML = "£";
//   }
// });
