module.exports = {

  patches: {

    "promise.js": [
      "require('bluebird')",
      "require('bluebird', 'can-ignore')"
    ]

  }

};
