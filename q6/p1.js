const fs = require("node:fs");

function getRawInput() {
  const dataAsString = fs.readFileSync("p1-test-input.txt").toString();
  return dataAsString;
}

const rawInput = getRawInput();
const inputArr = rawInput.split("\n");

const nodeObjArr = [];
for (node of inputArr) {
  const nodeObj = {};
  const splitNode = node.split(":");

  const destinationsArr = splitNode[1].split(",");

  nodeObj.root = splitNode[0];
  nodeObj.destinations = destinationsArr;

  nodeObjArr.push(nodeObj);
}

console.log(nodeObjArr);

const destinationKey = "@";

function getSinglePath(nodeObj, allPathsArr, parentPath) {
  // Have parent path

  // If destination,
  // Append destination to parent path
  // Go to root with destination
  // If fruit
  // Append fruit to parent path
  // Return parent path

  if (nodeObj.destinations) {
    for (destination of nodeObj.destinations) {
      if (destination === "@") {
        parentPath.push(destination);
        const fullPath = parentPath;
        parentPath = [nodeObjArr[0].root];
        console.log("fullPath: ", fullPath);
        return;
      } else {
        parentPath.push(destination);
        for (pathObj of allPathsArr) {
          if (pathObj.root === destination) {
            getSinglePath(pathObj, allPathsArr, parentPath);
          }
        }
      }
    }
  }
}

getSinglePath(nodeObjArr[0], nodeObjArr, [nodeObjArr[0].root]);
