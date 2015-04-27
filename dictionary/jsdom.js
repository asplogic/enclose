module.exports = {

  patches: {

    "lib/jsdom.js": [
      "\"use strict\";",
      "\"use strict\"; /* babel */"
    ],

    "lib/jsdom/living/node-iterator.js": [
      "\"use strict\";",
      "\"use strict\"; /* babel */"
    ]

  }

};
