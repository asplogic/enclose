---
layout: default
title: home
---

![Hello, world!](screenshot.png)

### Use cases

* Make a commercial version of your application without sources.
* Make a demo/evaluation/trial version of your app without sources.
* Make some kind of self-extracting archive or installer.
* Make a closed source GUI application using [node-thrust](https://github.com/breach/node-thrust).
* No need to install node and npm to deploy the compiled application.
* No need to download hundreds of files via `npm install` to deploy
your application. Deploy it as a single independent file.
* Put your assets inside the executable to make it even more portable.
* Test your app against new node version without installing it.

### Install

```
npm install enclose
```

### The package

As input you specify the entry file of your project `/path/project.js`.
As output you get a standalone executable `/path/project`. When it is
run, it does the same as `node /path/project.js`.

### Command line

Command line call `./project a b` is equivalent to `node ./project.js a b`.

### Dependencies

The compiler parses your sources, detects calls to `require`, traverses
the dependencies of your project and includes them into the package. You
don't need to list them manually.

### Assets

If your project has assets (html templates, css, etc), for example to
serve via http, you can bundle them into the package. Just list them
as a [glob](https://github.com/sindresorhus/globby) in the configuration
file.

### Compilation? Srsly?

Both Yes and No.

Yes. Because JavaScript code is transformed into native code at
compile-time using
[V8 internal compiler](https://github.com/v8/v8-git-mirror/blob/master/src/compiler.cc).
Hence, your sources are not required to execute the binary, and they
are not packaged.

No. Optimized native code can be generated only at run-time, using
information collected at run-time. Without that information EncloseJS
can generate only "unoptimized" code. It runs about 2x slower, than
optimized one.

Also, node.js code is put inside the executable (along with your code)
to support node API for your application at run-time. This increases
output file size.

So, this is not that static compilation we used to know. But nevertheless
you get fully functional binary without sources. Also, performance and
file size overhead are vectors of future work.

### Code protection?

The code protection is as strong as possible when the sources are
compiled to native code. Hackers will deal with
[that push-mov stuff](https://github.com/v8/v8-git-mirror/blob/master/src/x87/full-codegen-x87.cc#L1110).
No need to obfuscate, no need to encrypt, no "hidden" decryption keys.
Also

```
myfunc.toString()
function myfunc() { [native code] }
```

### Both node and io.js

You can choose what runtime to wrap your project in - node 0.12.x or
io.js. Both branches are supported.

### Fast

It takes seconds to make an executable. You dont need to build
node/io.js from sources in order to make the binary. EncloseJS is
shipped with precompiled parts, ready for bundling.

### Vanilla node

EncloseJS project does not aim to add new features to node, to avoid
undesirable issues and to have predictable stability. Let's keep it
vanilla.

### Unlimited code

You are not limited by the size of project. Big projects like `npm`,
`browserify`, `eslint` can be easily compiled using EncloseJS (see
[examples directory](https://github.com/igorklopov/enclose/tree/master/examples/42-npm)).
Probably, your existing project can be compiled too, with minimal
adjustments.

### Platforms

EncloseJS supports Linux, Windows and Mac OS X.

### Sources of EncloseJS

While the project is in beta stage, the sources stay closed. Btw,
EncloseJS is compiled with EncloseJS, so you may try to extract
the sources from binaries ;)
