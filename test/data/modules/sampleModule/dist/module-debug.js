define("test/sampleModule/0.0.1/module-debug", [], function(require, exports) {
  // var a = require('a-debug');
  // var b = require('b-debug');
  // var c = require('c-debug');

  exports.get = function(id) {
    return $(id);
  };
});
