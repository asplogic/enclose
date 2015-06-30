module.exports = {

  patches: {

    "lib/findup-sync.js": [
      "return glob.sync(pattern, globOptions);",
      "return require('fs').existsSync(path.join(globOptions.cwd, pattern)) ? [pattern] : glob.sync(pattern, globOptions);"
    ]

  }

};
