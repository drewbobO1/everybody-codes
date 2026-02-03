const { randomBytes } = require("node:crypto");
const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p2-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();

const wordListRaw = rawInput.split("\n")[0];
const wordListNoPrefix = wordListRaw.split(":")[1];
const wordListArr = wordListNoPrefix.split(",");

const lineListRaw = rawInput.split("\n");
const lineListArr = lineListRaw.slice(2);

let runicWordQty = 0;
// for (let word of individualInscriptionWords) {
//   for (let pattern of PATTERNS) {
//     if (word.includes(pattern)) {
//       runicWordQty += 1;
//     }
//   }
// }

return runicWordQty;
