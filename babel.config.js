module.exports = {
  // Babel presets for compiling JavaScript and React code
  presets: [
    "@babel/preset-env", // Preset for compiling modern JavaScript syntax to target environments
    ["@babel/preset-react", { runtime: "automatic" }], // Preset for compiling React JSX syntax with automatic runtime
  ],
};
