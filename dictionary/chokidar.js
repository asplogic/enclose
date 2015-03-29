module.exports = {

  patches: {

    "lib/fsevents-handler.js": [
      "require('fsevents')",
      "require('fsevents', 'can-ignore')"
    ]

  }

};
