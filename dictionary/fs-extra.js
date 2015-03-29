module.exports = {

  patches: {

    "lib/index.js": [
      "require(\"graceful-fs\")",
      "require(\"graceful-fs\", \"can-ignore\")"
    ]

  }

};
