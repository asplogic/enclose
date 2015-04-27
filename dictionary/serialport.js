module.exports = {

  patches: {

    "serialport.js": [
      "var PACKAGE_JSON = path.join(__dirname, 'package.json')",
      "var PACKAGE_JSON = path.join(path.relative(path.dirname(require.main.filename), __dirname), 'package.json')"
    ]

  }

};
