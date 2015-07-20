module.exports = {

  patches: {

    "bindings.js": [
      "return fileName",
      "return dirname(__dirname)"
    ]

  }

};
