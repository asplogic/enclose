module.exports = {

  scripts: [
    "lib/*.js"
  ],

  patches: {

    "lib/nodegit.js": [

      "require(\"../build/Debug/nodegit\")",
      "require(\"../build/Debug/nodegit\", \"can-ignore\")"

    ]

  }

};
