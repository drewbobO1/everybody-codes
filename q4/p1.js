const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p2-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();

// Part 1 (and part 2!)
// Forgot to convert strings to nums...
// Otherwise there were only a couple minor errors and I got it fairly quick

const nailHeightsStrs = rawInput.split("\n");
const nailHeightsNums = strArrToNumArr(nailHeightsStrs);

const lowestNail = getLowestNum(nailHeightsNums);
const requiredStrikes = countTotalDif(nailHeightsNums, lowestNail);

console.log(requiredStrikes);
return requiredStrikes;

function getLowestNum(nails) {
  let lowestNum = nails[0];
  for (let nail of nails) {
    if (nail < lowestNum) {
      lowestNum = nail;
    }
  }
  return lowestNum;
}

function countTotalDif(nails, lowestNum) {
  let numOfStrikes = 0;
  for (let nail of nails) {
    while (nail > lowestNum) {
      nail -= 1;
      numOfStrikes += 1;
    }
  }
  return numOfStrikes;
}

function strArrToNumArr(strArr) {
  let numArr = [];
  strArr.forEach((_, i) => {
    numArr.push(Number(strArr[i]));
  });
  return numArr;
}
