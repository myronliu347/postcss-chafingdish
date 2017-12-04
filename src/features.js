export default {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */
  // https://npmjs.com/package/saladcss-bem
  bem: (options) => require("saladcss-bem")(options),
  
  // postcss-color-function
  color: (options) => require("postcss-color-function")(options),
  
  // https://npmjs.com/package/postcss-utils
  utils: (options) => require("postcss-utils")(options),

  // https://npmjs.com/package/postcss-calc
  calc: (options) => require("postcss-calc")(options),

  // https://npmjs.com/package/postcss-initial
  initial: (options) => require("postcss-initial")(options),

  // https://npmjs.com/package/postcss-inline-svg
  inlineSvg: (options) => require("postcss-inline-svg")(options),

  // https://npmjs.com/package/postcss-short
  short: (options) => require("postcss-short")(options),

  // https://npmjs.com/package/postcss-shape
  shape: (options) => require("postcss-shape")(options),

  // https://npmjs.com/package/autoprefixer
  autoprefixer: (options) => require("autoprefixer")(options)
}
