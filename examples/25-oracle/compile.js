#!/usr/bin/env node

/* eslint curly:0 */
/* eslint no-process-exit:0 */

var enclose = require("../../").exec;
var flags = [];
var x64 = process.arch === "x64";
if (x64) flags.push("--x64");
var iojs = (process.versions.modules | 0) >= 44;
if (iojs) flags.push("--version", "iojs");

try {
  require.resolve("oracle");
} catch(error) {
  console.log("Failed to require('oracle')");
  console.log("Please run 'npm install' here");
  process.exit(1);
}

flags.push("./index.js");
enclose(flags);
