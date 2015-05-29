module.exports = {

  patches: {

    "lib/consolidate.js": [
      "require('tinyliquid')",
      "require('tinyliquid', 'can-ignore')",
      "require('swig')",
      "require('swig', 'can-ignore')",
      "require('atpl')",
      "require('atpl', 'can-ignore')",
      "require('liquor')",
      "require('liquor', 'can-ignore')",
      "require('ejs')",
      "require('ejs', 'can-ignore')",
      "require('eco')",
      "require('eco', 'can-ignore')",
      "require('jazz')",
      "require('jazz', 'can-ignore')",
      "require('jqtpl')",
      "require('jqtpl', 'can-ignore')",
      "require('hamljs')",
      "require('hamljs', 'can-ignore')",
      "require('hamlet')",
      "require('hamlet', 'can-ignore')",
      "require('whiskers')",
      "require('whiskers', 'can-ignore')",
      "require('haml-coffee')",
      "require('haml-coffee', 'can-ignore')",
      "require('hogan.js')",
      "require('hogan.js', 'can-ignore')",
      "require('templayed')",
      "require('templayed', 'can-ignore')",
      "require('handlebars')",
      "require('handlebars', 'can-ignore')",
      "require('underscore')",
      "require('underscore', 'can-ignore')",
      "require('whiskers')",
      "require('whiskers', 'can-ignore')",
      "require('lodash')",
      "require('lodash', 'can-ignore')",
      "require('walrus')",
      "require('walrus', 'can-ignore')",
      "require('mustache')",
      "require('mustache', 'can-ignore')",
      "require('just')",
      "require('just', 'can-ignore')",
      "require('just')",
      "require('just', 'can-ignore')", // TODO WTF regex g
      "require('ect')",
      "require('ect', 'can-ignore')",
      "require('ect')",
      "require('ect', 'can-ignore')", // TODO WTF regex g
      "require('mote')",
      "require('mote', 'can-ignore')",
      "require('toffee')",
      "require('toffee', 'can-ignore')",
      "require('toffee')",
      "require('toffee', 'can-ignore')", // TODO WTF regex g
      "require('dot')",
      "require('dot', 'can-ignore')",
      "require('ractive')",
      "require('ractive', 'can-ignore')",
      "require('htmling')",
      "require('htmling', 'can-ignore')",
      "require('react-tools')",
      "require('react-tools', 'can-ignore')",
      "require('react-tools')",
      "require('react-tools', 'can-ignore')", // TODO WTF regex g
      "if (!require.extensions['.jsx'])",
      "if (false)", // TODO
      "if (!require.extensions['.react'])",
      "if (false)" // TODO
    ]

  }

};
