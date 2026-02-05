const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p1-test-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();

let grid = rawInput.split("\n");
const margin = 1;

const twoDimArrGrid = create2DArrFromGrid(grid);

let charsLeftToIncrease = true;
// while (charsLeftToIncrease) {
//   charsLeftToIncrease = false;

for (let i = margin; i < grid.length - margin; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === "#") {
      //   console.log(j);
      twoDimArrGrid[i][j] = 1;
      // charsLeftToIncrease = true;
    }

    if (checkSurroundingIndeces(grid, i, j, grid[i][j])) {
      twoDimArrGrid[i][j] += 1;
      // charsLeftToIncrease = true;
    }
  }
}
// }

console.log(twoDimArrGrid);
const totalGridValue = countValues(grid);

// console.log(grid[1][1]);
console.log(totalGridValue);
function create2DArrFromGrid(grid) {
  let twoDimArrGrid = [];

  for (let row of grid) {
    //  console.log(grid);
    //  console.log()
    let newRow = [];
    for (let char of row) {
      // console.log(char);
      newRow.push(char);
    }
    twoDimArrGrid.push(newRow);
  }

  return twoDimArrGrid;
}

function checkSurroundingIndeces(grid, currentRow, currentIndex, currentValue) {
  if (grid[currentRow - 1][currentIndex] !== currentValue) {
    return false;
  }

  if (grid[currentRow + 1][currentIndex] !== currentValue) {
    return false;
  }

  if (grid[currentRow][currentIndex - 1] !== currentValue) {
    return false;
  }

  if (grid[currentRow][currentIndex + 1] !== currentValue) {
    return false;
  }

  return true;
}

function countValues(grid) {
  let totalGridValue = 0;

  for (let i = margin; i < grid.length - margin; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (Number(grid[i][j]) !== NaN) {
        totalGridValue += Number(grid[i][j]);
      }
    }
  }

  return totalGridValue;
}
