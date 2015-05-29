#!/usr/bin/env node

/* eslint camelcase:0 */
/* eslint curly:0 */

"use strict";

var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;
var EventEmitter = require("events").EventEmitter;
var binaries_json_name = "binaries.json";

try {
  var binaries_json = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        binaries_json_name
      )
    ), "utf8"
  );
} catch(error) {
  throw new Error(
    "File '" + binaries_json_name +
    "' not found. Reinstall EncloseJS"
  );
}

function get_suffix(arch) {
  return {
    win32: {
      x86: "win32",
      x64: "win64"
    },
    linux: {
      x86: "linux-x86",
      x64: "linux-x64",
      arm: "linux-arm"
    },
    darwin: {
      x86: "darwin-x86",
      x64: "darwin-x64"
    }
  }[process.platform][arch];
}

function get_version_string(args) {
  var pos =
    (args.indexOf("-v") + 1) ||
    (args.indexOf("--version") + 1);
  if (!pos) return null;
  return args[pos];
}

function get_version(args, suffix) {
  var bjs = binaries_json[suffix];
  var v = get_version_string(args);
  if (!v) v = bjs.default;
  var bjsv = bjs[v] || bjs["v" + v];
  return bjsv;
}

function get_arch(args) {
  var x64 = (args.indexOf("-x") + 1) ||
            (args.indexOf("--x64") + 1);
  if (process.arch === "ia32" && x64) return "x64";
  if (process.arch === "ia32") return "x86";
  if (process.arch === "x64" && x64) return "x64";
  if (process.arch === "x64") return "x86";
  if (process.arch === "arm") return "arm";
  throw new Error("Bug in 'get_arch'");
}

function exec(args) {

  var arch = get_arch(args);
  var suffix = get_suffix(arch);
  var version = get_version(args, suffix);

  if (!version) {
    throw new Error(
      "Bad version or architecture. " +
      "See file '" + binaries_json_name + "'"
    );
  }

  var full = path.join(
    __dirname,
    version.enclose.name
  );

  if ((args.indexOf("--color") < 0) &&
      (args.indexOf("--no-color") < 0)) {
    if (process.stdout.isTTY) {
      args.push("--color");
    }
  }

  var c = spawn(full, args);
  var ee = new EventEmitter();
  var counter = 0, code = 0;

  c.on("error", function(error) {
    ee.emit("error", error);
  });

  function maybe_exit() {
    if (++counter < 3) return;
    ee.emit("exit", code);
  }

  c.stderr.on("data", function(chunk) {
    process.stderr.write(chunk);
  });

  c.stderr.on("end", function() {
    maybe_exit();
  });

  c.stdout.on("data", function(chunk) {
    process.stdout.write(chunk);
  });

  c.stdout.on("end", function() {
    maybe_exit();
  });

  c.on("exit", function(code_) {
    code = code_;
    maybe_exit();
  });

  return ee;

}

function children(o, cb) {
  Object.keys(o).some(
    function(k) {
      cb(o[k], k);
    }
  );
}

function downloads() {

  var arch = process.arch;

  if (process.platform === "win32" &&
      process.env.PROCESSOR_ARCHITEW6432) {
    arch = "x64";
  }

  var suffixes = {
    ia32: [
      get_suffix("x86")
    ],
    x64: [
      get_suffix("x86"),
      get_suffix("x64")
    ],
    arm: [
      get_suffix("arm")
    ]
  }[arch];

  var items = [];

  children(binaries_json, function(suffix, key) {
    if (suffixes.indexOf(key) < 0) return; // *****
    children(suffix, function(version) {
      if (typeof version !== "object") return; // "default" string
      children(version, function(binary) {
        items.push(binary);
      });
    });
  });

  return items;

}

if (module.parent) {
  module.exports = {
    exec: exec,
    downloads: downloads
  };
} else {
  exec(
    process.argv.slice(2)
  );
}
