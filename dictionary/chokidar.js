module.exports = {

  patches: {

    // TODO temporary solution
    // fix after require('fsevents', 'option')

    "lib/fsevents-handler.js": [
      "require('fsevents');",
      "null"
    ]

  }

};
