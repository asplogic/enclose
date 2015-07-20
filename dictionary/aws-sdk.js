module.exports = {

  dirs: [
    "apis",
    "lib/services"
  ],

  scripts: [
    "apis/*.json",
    "lib/services/*.js"
  ],

  patches: {

    "lib/types/urlencoded.js": [
      "var parse = parser('qs')",
      // force to take the package
      "var parse = parser('qs'); require('qs')"
    ]

  }

};
