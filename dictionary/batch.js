module.exports = {

  patches: {

    "index.js": [
      "require('emitter')",
      "require('emitter', 'can-ignore')"
    ]

  }

};
