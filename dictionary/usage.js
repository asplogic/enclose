module.exports = {

  scripts: [
    "lib/providers/*.js"
  ],

  patches: {

    "sysinfo.js": [
      "require('bindings')('sysinfo')",
      "require('./build/Release/sysinfo')"
    ]

  }

};
