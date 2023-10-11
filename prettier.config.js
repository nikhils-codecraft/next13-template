/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: false,
  jsxBracketSameLine: false,
  plugins: ["prettier-plugin-tailwindcss"],
};
