const fs = require("node:fs");

function getRawInput() {
  let dataAsString = fs.readFileSync("q1-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
let potionQty = 0;

function adjustPotionQty(input) {
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

for (let i = 0; i < rawInput.length; i++) {
  adjustPotionQty(rawInput[i]);
}

return potionQty;
