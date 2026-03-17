const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p1-test-input.txt").toString();
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
  // console.log("Root branches: ", branch);
  let newPath = absoluteRoot + branch;
  goDownBranch(branch, newPath);
}

function goDownBranch(branchRoot, latestPath) {
  // console.log(`nodeObjMaster[branchRoot]: ${nodeObjMaster[branchRoot]}`);
  if (undefined === nodeObjMaster[branchRoot]) {
    allPathsArr.push(latestPath);
    return;
  }
  for (let path of nodeObjMaster[branchRoot]) {
    // console.log("path: ", path);
    if (path !== fruit) {
      // console.log("HI");
      let updatedPathHistory = latestPath + path;
      goDownBranch(path, updatedPathHistory);
    } else {
      latestPath += path;
      allPathsArr.push(latestPath);
    }
  }
}

function getShortestPath(allPathsArr) {
  let shortestPath = allPathsArr[0];
  for (let path of allPathsArr) {
    // console.log(`path: ${path}\nlength: ${path.length}`);
    if (path.length < shortestPath.length) {
      shortestPath = path;
    }
  }
  return shortestPath;
}

// console.log("allPathsArr: ", allPathsArr);
console.log("Shortest path: ", getShortestPath(allPathsArr));
