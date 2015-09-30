'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _operatorsBaseOperator = require('../operators/baseOperator');

var Expect = (function () {

	/**
  * @param {*} value value to test
  */

	function Expect(value) {
		_classCallCheck(this, Expect);

		/**
   * Base value
   * @type {*}
   * @private
   */
		this._value = value;

		/**
   * Is Expression Negated
   * @type {boolean}
   * @private
   */
		this._isNegate = false;
	}

	/**
  * Negates the expression
  * @returns {Expect}
  */

	_createClass(Expect, [{
		key: 'to',

		/**
   * Expects instance of BaseOperator Child (instance of EqOperator/BeGreaterThanOperator)
   * use functions eq(value)/beGreaterThan(value)
   * @see {@link eq}
   * @see {@link beGreaterThan}
   * @param {BaseOperator} operator
   * @returns {boolean}
   */
		value: function to(operator) {
			if (operator instanceof _operatorsBaseOperator.BaseOperator) {
				var result = operator.test(this._value);
				return this._isNegate ? !result : result;
			}

			throw new Error("Expect#to: method argument expected to be a child of BaseOperator");
		}
	}, {
		key: 'not',
		get: function get() {
			this._isNegate = !this._isNegate;
			return this;
		}
	}]);

	return Expect;
})();

exports.Expect = Expect;
//# sourceMappingURL=expect.js.map