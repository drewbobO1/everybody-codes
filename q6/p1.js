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
  // nodeObjArr.push(nodeObj);
}

// console.log(nodeObjMaster);

const absoluteRoot = "RR";
const fruit = "@";

const allPathsArr = [];

// console.log("root: ", absoluteRoot);

// Loop through immediate branches of absolute root (RR)
for (let branch of nodeObjMaster[absoluteRoot]) {
  let newPath = absoluteRoot + branch;
  // console.log("newPath: ", newPath);
  goDownBranch(branch, newPath);
}

// Very close - Only issue is that the child paths are stacking, instead of being separate.
function goDownBranch(branchRoot, latestPath) {
  // console.log("branchRoot: ", branchRoot);

  let latestPathConsistent = latestPath;
  // console.log("latestPath TOP: ", latestPath);
  for (let path of nodeObjMaster[branchRoot]) {
    // console.log("path: ", path);
    // let
    if (path !== fruit) {
      let branchPath = latestPath + path;
      // console.log(`path: ${path}\nlatestPath: ${branchPath}`);
      // console.log("latestPath: ", latestPath);
      goDownBranch(path, branchPath);
    } else {
      // console.log("Fruit? (path): ", path);
      latestPath += path;
      // console.log("FRUIT path: ", latestPath);
      allPathsArr.push(latestPath);
    }
  }
}

// console.log("All paths: ", allPathsArr);

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
