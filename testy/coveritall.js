#!/usr/bin/env node

// var HTMLReporter = require('../lib/reporters/HTMLReporter');

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}


var id = require('./package.json').id;
var coverpath = getUserHome() + '/' + id + ".coverstats.json";
console.log(coverpath);
coverobj = require(coverpath);
var HTMLReporter = require('./node_modules/coverjs-moz/lib/reporters/HTMLReporter');
//var reporter = new HTMLReporter(global.__$coverObject);
var reporter = new HTMLReporter(coverobj);
console.log(reporter.report());
