module.exports = {

  scripts: [
    "lib/**/*.js"
  ],

  // TODO add more dialects

  patches: {

    "lib/dialects/sqlite/connection-manager.js": [
      "this.lib = require(sequelize.config.dialectModulePath || 'sqlite3').verbose();",
      "var dmp = sequelize.config.dialectModulePath;" +
      "this.lib = (dmp ? require(dmp) : require('sqlite3')).verbose();"
    ],

    "lib/dialects/postgres/connection-manager.js": [
      "this.lib = sequelize.config.native ? require(sequelize.config.dialectModulePath || 'pg').native : require(sequelize.config.dialectModulePath || 'pg');",
      "var dmp = sequelize.config.dialectModulePath;" +
      "var lib = dmp ? require(dmp) : require('pg');" +
      "this.lib = sequelize.config.native ? lib.native : lib;"
    ],

    "lib/dialects/postgres/hstore.js": [
      "require('pg-hstore')",
      "require('pg-hstore', 'can-ignore')"
    ]

  }

};
