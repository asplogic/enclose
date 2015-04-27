module.exports = {

  patches: {

    "lib/sqlite3.js": [
      "var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')))",
      "var binding_path = path.resolve(path.relative(path.dirname(require.main.filename), binary.find(path.resolve(path.join(__dirname,'../package.json')))))"
    ]

  }

};
