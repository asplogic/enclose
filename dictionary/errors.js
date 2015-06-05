module.exports = {

  patches: {

    "lib/errors.js": [
      "<",
      "var path = require('path');",
      "__dirname + '/static/error.css'",
      "path.join(__dirname, '/static/error.css')",
      "__dirname + '/static/error.html'",
      "path.join(__dirname, '/static/error.html')"
    ]

  }

};
