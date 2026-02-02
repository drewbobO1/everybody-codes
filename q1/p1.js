const fs = require("node:fs");
// const { type } = require('node:os');

function getRawInput() {
  let dataAsString = fs.readFileSync("q1-input.txt").toString();
  return dataAsString;
}

// console.log(getRawInput());
const rawInput = getRawInput();
let potionQty = 0;

function countPotions(input) {
  switch (input) {
    case "A":
      break;
    case "B":
      potionQty += 1;
      break;
    case "C":
      potionQty += 3;
      break;
    default:
      console.log("There shouldn't be any other letters!");
  }
}
