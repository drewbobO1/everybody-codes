const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p1-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
const inputArr = rawInput.split("\n");

const nodeObjMaster = {};
for (let node of inputArr) {
  const nodeObj = {};
  const splitNode = node.split(":");

  const destinationsArr = splitNode[1].split(",");

  nodeObj.root = splitNode[0];
  nodeObj.paths = destinationsArr;

  nodeObjMaster[splitNode[0]] = destinationsArr;
}

const absoluteRoot = "RR";
const fruit = "@";

const allPathsArr = [];

// Loop through immediate branches of absolute root (RR)
for (let branch of nodeObjMaster[absoluteRoot]) {
  let newPath = absoluteRoot + branch;
  goDownBranch(branch, newPath);
}

function goDownBranch(branchRoot, latestPath) {
  if (undefined === nodeObjMaster[branchRoot]) {
    allPathsArr.push(latestPath);
    return;
  }
  for (let path of nodeObjMaster[branchRoot]) {
    if (path !== fruit) {
      let updatedPathHistory = latestPath + path;
      goDownBranch(path, updatedPathHistory);
    } else {
      latestPath += path;
      allPathsArr.push(latestPath);
    }
  }
}

function getUniquePath(allPathsArr) {
  const pathLengthObj = {};

  for (let path of allPathsArr) {
    if (pathLengthObj[path.length]) {
      pathLengthObj[path.length].quantity += 1;
      pathLengthObj[path.length].pathsArr.push(path);
    } else {
      pathLengthObj[path.length] = { quantity: 1, pathsArr: [path] };
    }
  }

  for (let key in pathLengthObj) {
    if (pathLengthObj[key].quantity === 1) {
      return pathLengthObj[key].pathsArr[0];
    }
  }

  return "";
}

console.log("Unique path: ", getUniquePath(allPathsArr));
