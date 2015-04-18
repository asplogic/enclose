module.exports = {

  patches: {

    "lib/jsdom.js": [
      "\"use strict\";",
      "\"use strict\"; /* babel */"
    ]

  }

};
