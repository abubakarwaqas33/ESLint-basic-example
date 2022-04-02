module.exports = {
  extends: ["eslint:recommended", "standard"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
