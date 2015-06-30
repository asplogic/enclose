module.exports = {

  patches: {

    "lib/view.js": [
      "require(this.ext.substr(1))",
      "require(this.ext.substr(1), 'can-ignore')"
    ]

  }

};
