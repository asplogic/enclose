module.exports = {

  patches: {

    "lib/contextify.js": [
      "require('bindings')('contextify')",
      "require('./../build/Release/contextify')"
    ]

  }

};
