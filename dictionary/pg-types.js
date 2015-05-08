module.exports = {

  patches: {

    "lib/textParsers.js": [
      "require(__dirname + \"/arrayParser.js\")",
      "require(\"./arrayParser.js\")"
    ]

  }

};
