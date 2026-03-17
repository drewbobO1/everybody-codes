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

// =========

// for (let rootPath of absoluteRoot.paths) {
//   let solutionPath = rootPath;
//   console.log("solutionPath: ", solutionPath);
//   for (let branch of nodeObjArr) {
//     if (branch.root === rootPath) {
//       for (let path of branch.paths) {
//         solutionPath += path;
//       }
//       console.log("solutionPath: ", solutionPath);

//       console.log("branch: ", branch);
//       if (branch.paths.includes(fruit)) {
//         console.log(branch);
//       } else {
//       }
//     }
//   }
//   // console.log("path: ", path);
// }

// function getSinglePath(nodeObj, allPathsArr, parentPath) {
//   // Have parent path

//   // If destination,
//   // Append destination to parent path
//   // Go to root with destination
//   // If fruit
//   // Append fruit to parent path
//   // Return parent path

//   if (nodeObj.destinations) {
//     for (let destination of nodeObj.destinations) {
//       if (destination === "@") {
//         parentPath.push(destination);
//         const fullPath = parentPath;
//         parentPath = [nodeObjArr[0].root];
//         console.log("fullPath: ", fullPath);
//         return;
//       } else {
//         parentPath.push(destination);
//         for (pathObj of allPathsArr) {
//           if (pathObj.root === destination) {
//             getSinglePath(pathObj, allPathsArr, parentPath);
//           }
//         }
//       }
//     }
//   }
// }

// getSinglePath(nodeObjArr[0], nodeObjArr, [nodeObjArr[0].root]);
