module.exports = {

  dirs: [
    "lib/middleware"
  ],

  scripts: [
    "lib/middleware/*.js"
  ],

  assets: [
    "lib/public/**/*"
  ],

  patches: {

    "lib/middleware/compiler.js": [
      "require('sass')",
      "require('sass', 'can-ignore')",
      "require('less')",
      "require('less', 'can-ignore')",
      "require('coffee-script')",
      "require('coffee-script', 'can-ignore')"
    ]

  }

};
