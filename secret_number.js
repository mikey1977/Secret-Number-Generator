'use strict';
module.exports = function() {
  var module = {};
  var secretNumber = (Math.random() * 1000000);
  return function () {
    return secretNumber;
  };

};
console.log( module.exports());