module.exports = {

  scripts: [
    "lib/appenders/*.js"
  ],

  patches: {

    "lib/appenders/loggly.js": [
      "require('loggly')",
      "require('loggly', 'can-ignore')"
    ],

    "lib/appenders/smtp.js": [
      "require(\"nodemailer\")",
      "require(\"nodemailer\", \"can-ignore\")"
    ]

  }

};
