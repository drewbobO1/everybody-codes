const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p3-test-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();

// Part 3
const nailHeightsStrs = rawInput.split("\n");
const nailHeightsNums = strArrToNumArr(nailHeightsStrs);

const heightAvg = getHeightAvg(nailHeightsNums);
const requiredStrikes = adjustNailHeightsToAvg(nailHeightsNums, heightAvg);

console.log("Height avg: ", heightAvg);
console.log(requiredStrikes);
return requiredStrikes;

function adjustNailHeightsToAvg(nails, avg) {
  let numOfStrikes = 0;
  for (let nail of nails) {
    // console.log("Nail before: ", nail);
    while (nail < avg) {
      // console.log("Nail in PLUS while loop: ", nail);
      nail += 1;
      numOfStrikes += 1;
    }
    // console.log("Nail AFTER PLUS while loop: ", nail);

    while (nail > avg) {
      // console.log("Nail in MINUS while loop: ", nail);
      nail -= 1;
      numOfStrikes += 1;
    }
    // console.log("Nail AFTER MINUS while loop: ", nail);
  }
  return numOfStrikes;
}

function getHeightAvg(nails) {
  let collectiveHeightTotal = 0;
  for (let nail of nails) {
    collectiveHeightTotal += nail;
  }

  let avg = collectiveHeightTotal / nails.length;
  if (avg % 1 >= 0.5) {
    avg = Math.ceil(avg);
  } else {
    avg = Math.floor(avg);
  }
  return avg;
}

function strArrToNumArr(strArr) {
  let numArr = [];
  strArr.forEach((_, i) => {
    numArr.push(Number(strArr[i]));
  });
  return numArr;
}
