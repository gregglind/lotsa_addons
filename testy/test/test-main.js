var main = require("main");

exports.test_run = function(assert) {
  assert.pass("Unit test running!");
};


exports['test main is true'] = function(assert){
  assert.equal(main.main(),1,'truth be truth');
}

require('test').run(exports);
