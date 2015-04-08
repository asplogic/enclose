module.exports = {

  patches: {

    "lib/msgpack.js": [

      "require(__dirname + \"/../build/Release/msgpackBinding\")",
      "require(\"../build/Release/msgpackBinding\")"

    ]

  }

};
