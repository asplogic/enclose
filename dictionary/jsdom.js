module.exports = {

  patches: {

    "lib/jsdom/level2/html.js": [
      "require('canvas')",
      "require('canvas', 'can-ignore')"
    ]

  }

};
