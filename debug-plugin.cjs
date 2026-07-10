const fs = require("fs");

module.exports = () => {
  return {
    postcssPlugin: "debug-plugin",
    Once(root) {
      fs.writeFileSync("/tmp/postcss-debug.txt",
        `PostCSS ran at ${Date.now()}\n` +
        `File: ${root.source?.input?.file || "unknown"}\n` +
        `Nodes: ${root.nodes.length}\n` +
        `First node type: ${root.nodes[0]?.type}\n` +
        `First node value: ${root.nodes[0]?.toString()?.substring(0, 200)}\n`
      );
    },
  };
};
module.exports.postcss = true;
