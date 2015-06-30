module.exports = {

  patches: {

    "index.js": [
      "resolve.sync(this.moduleName, {basedir: configBase || cwd, paths: paths})",
      "require.resolve(this.moduleName)" // TODO configBase
    ]

  }

};
