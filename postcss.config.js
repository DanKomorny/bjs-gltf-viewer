// postcss.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require("tailwindcss");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require("autoprefixer");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cssnano = require("cssnano");

const plugins =
  process.env.NODE_ENV === "production"
    ? [tailwind, autoprefixer, cssnano]
    : [tailwind, autoprefixer];

module.exports = { plugins };
