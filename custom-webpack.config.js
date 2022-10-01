const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

module.exports = (config, context) => {
  const config_merged = merge(config, {
    externalsPresets: { node: true },
    externals: [
      {
        canvas: "commonjs canvas", // Important (2)
      },
      //nodeExternals(),
    ],
  });
  return config_merged;
};
