module.exports = {

  dirs: [
    "lib/types"
  ],

  scripts: [
    "lib/types/*.js"
  ],

  patches: {

    "lib/types/urlencoded.js": [
      "var parse = parser('qs')",
      // force to take the package
      "var parse = parser('qs'); require('qs')"
    ]

  }

};
