#!/usr/bin/env nodejs
/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
'use strict';

var srcFn = process.argv[2],
  readFileOrStdin = require('read-file-stdin'),
  parseToml = require('toml').parse,
  univeil = require('univeil');

readFileOrStdin(srcFn, function convert(err, data) {
  var safeInvisibleChars = '\n';
  if (err) {
    console.error(err);
    return process.exit(4);
  }
  data = parseToml(data);
  data = JSON.stringify(data, null, 2).replace(/^(\{|\[)\n /, '$1');
  data = univeil(data, safeInvisibleChars);
  console.log(data);
});
