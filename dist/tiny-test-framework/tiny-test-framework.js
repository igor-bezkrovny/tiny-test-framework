'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.expect = expect;
exports.eq = eq;
exports.beGreaterThan = beGreaterThan;

var _assertionStylesExpect = require('./assertionStyles/expect');

var _operatorsEqOperator = require('./operators/eqOperator');

var _operatorsBeGreaterThanOperator = require('./operators/beGreaterThanOperator');

/**
 * @param {*} value base value
 */

function expect(value) {
  return new _assertionStylesExpect.Expect(value);
}

/**
 * @param {*} value value to check for equality
 */

function eq(value) {
  return new _operatorsEqOperator.EqOperator(value);
}

/**
 * @param {*} value value to check for being greater
 */

function beGreaterThan(value) {
  return new _operatorsBeGreaterThanOperator.BeGreaterThanOperator(value);
}
//# sourceMappingURL=tiny-test-framework.js.map