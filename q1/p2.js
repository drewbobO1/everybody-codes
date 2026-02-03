const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("q1-p2-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
let potionQty = 0;

// Part 2
// First answer: Incorrect - low
// Second answer: Incorrect - low
// Third answer: Correct!
function adjustPotionQtyPt2(inputPair) {
  let pairValue = 0;
  if (!inputPair.includes("x")) {
    for (let char of inputPair) {
      switch (char) {
        case "A":
          pairValue += 1;
          break;
        case "B":
          pairValue += 2;
          break;
        case "C":
          pairValue += 4;
          break;
        case "D":
          pairValue += 6;
          break;
        default:
          console.log("Double case: ", char);
      }
    }
  } else {
    for (let char of inputPair) {
      switch (char) {
        case "A":
          break;
        case "B":
          pairValue += 1;
          break;
        case "C":
          pairValue += 3;
          break;
        case "D":
          pairValue += 5;
          break;
        case "x":
          break;
        default:
          console.log("Single case: ", char);
      }
    }
  }

  return pairValue;
}

for (let i = 0; i < rawInput.length; i += 2) {
  if (i + 1 < rawInput.length) {
    const pair = rawInput[i] + rawInput[i + 1];
    potionQty += adjustPotionQtyPt2(pair);
  }
}

return potionQty;
