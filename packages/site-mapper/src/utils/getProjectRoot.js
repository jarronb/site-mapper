const fs = require("fs");
const path = require("path");

function getProjectRoot(currentDir = __dirname.split(path.sep)) {
  if (!currentDir.length) {
    throw Error("Could not find project root.");
  }

  const nodeModulesPath = currentDir.concat(["node_modules"]).join(path.sep);
  if (fs.existsSync(nodeModulesPath) && !currentDir.includes("node_modules")) {
    return currentDir.join(path.sep);
  }

  return getProjectRoot(currentDir.slice(0, -1));
}
module.exports = { getProjectRoot };
