module.exports = {

  patches: {

    "lib/babel/util.js": [
      "path.join(__dirname, \"transformation/templates\")",
      "\"\""
    ],

    "lib/babel/api/register/node.js": [
      "*",
      ""
    ]

  }

};
