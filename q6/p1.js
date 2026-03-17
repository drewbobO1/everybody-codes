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
  let newPath = absoluteRoot + branch;
  goDownBranch(branch, newPath);
}

function goDownBranch(branchRoot, latestPath) {
  for (let path of nodeObjMaster[branchRoot]) {
    if (path !== fruit) {
      let branchPath = latestPath + path;
      goDownBranch(path, branchPath);
    } else {
      latestPath += path;
      allPathsArr.push(latestPath);
    }
  }
}

function getShortestPath(allPathsArr) {
  let shortestPath = allPathsArr[0];
  for (let path of allPathsArr) {
    if (path.length < shortestPath.length) {
      shortestPath = path;
    }
  }
  return shortestPath;
}

console.log("Shortest path: ", getShortestPath(allPathsArr));
