module.exports = {

  patches: {

    // TODO seems to work without this patch

    "lib/BufferUtil.js": [
      "*",
      "module.exports = require('./BufferUtil.fallback');"
    ],

    "lib/Validation.js": [
      "*",
      "module.exports = require('./Validation.fallback');"
    ]

  }

};
