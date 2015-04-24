module.exports = {

  scripts: [
    "lib/**/*.js"
  ],

  patches: {

    "lib/dialects/postgres/hstore.js": [
      "require('pg-hstore')",
      "require('pg-hstore', 'can-ignore')"
    ]

  }

};
