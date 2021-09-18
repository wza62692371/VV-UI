module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: 0,
    endOfLine: 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
