const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("q1-p2-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
let potionQty = 0;

// Part 1
function adjustPotionQtyPt1(input) {
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
  adjustPotionQtyPt1(rawInput[i]);
}

return potionQty;
