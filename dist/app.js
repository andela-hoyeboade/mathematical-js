'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var factorial = exports.factorial = function factorial(n) {
  if (typeof n !== 'number') {
    throw 'Invalid argument type. Can only find the factorial of a number';
  } else if (n < 0) {
    throw 'Invalid argument type. Can only find the factorial of a positive number';
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    var total = 1;
    for (var i = n; i >= 2; i--) {
      total = total * i;
    }
    return total;
  }
};