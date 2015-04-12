module.exports = {

  patches: {

    "lib/parser/hiredis.js": [
      "require(\"hiredis\")",
      "require(\"hiredis\", \"can-ignore\")"
    ]

  }

};
