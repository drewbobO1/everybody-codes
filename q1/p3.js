const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("q1-p3-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
let potionQty = 0;

// Part 3
// First answer: Correct!
function adjustPotionQtyPt3(input) {
  let numOfFoes = 0;
  for (let char of input) {
    if (char !== "x") {
      numOfFoes += 1;
    }
  }

  let pairValue = 0;
  let determinantValue = numOfFoes - 1;

  for (let char of input) {
    switch (char) {
      case "A":
        pairValue += 0 + determinantValue;
        break;
      case "B":
        pairValue += 1 + determinantValue;
        break;
      case "C":
        pairValue += 3 + determinantValue;
        break;
      case "D":
        pairValue += 5 + determinantValue;
        break;
      case "x":
        break;
      default:
        console.log("Double case: ", char);
    }
  }

  return pairValue;
}

for (let i = 0; i < rawInput.length; i += 3) {
  if (i + 2 < rawInput.length) {
    const trio = rawInput[i] + rawInput[i + 1] + rawInput[i + 2];
    potionQty += adjustPotionQtyPt3(trio);
  }
}

return potionQty;
