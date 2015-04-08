module.exports = {

  patches: {

    "lib/main.js": [

      "require('../build/Debug/addon')",
      "require('../build/Debug/addon', 'can-ignore')"

    ]

  }

};
