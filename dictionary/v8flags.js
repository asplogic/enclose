module.exports = {

  patches: {

    "index.js": [
      "*",
      "module.exports = function (cb) { return cb(null, []); };"
    ]

  }

};
