'use strict';

/**
 * @abstract
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BaseOperator = (function () {
	_createClass(BaseOperator, null, [{
		key: 'checkForNumber',

		/**
   * Checks and throws exception if value is not a number
   * @param {*} value value to check
   * @param {string} valueOwner value owner name, for example, "operator"
   */
		value: function checkForNumber(value, valueOwner) {
			if (typeof value !== 'number') {
				throw new Error(valueOwner + ' argument should be a number. ' + typeof value + ' is taken');
			}
		}

		/**
   * Checks and throws an exception if the value is 'not a number' number (isNaN)
   * @param {*} value value to check
   * @param {string} valueOwner value owner name, for example, "operator"
   */
	}, {
		key: 'checkForNaN',
		value: function checkForNaN(value, valueOwner) {
			if (isNaN(value)) {
				throw new Error(valueOwner + ' argument should be a number. NaN is taken');
			}
		}
	}]);

	function BaseOperator(value) {
		_classCallCheck(this, BaseOperator);

		/**
   * Operator value
   * @protected
   * @type {*}
   */
		this._value = value;
	}

	/**
  * @abstract
  * @param {*} value
  */

	_createClass(BaseOperator, [{
		key: 'test',
		value: function test(value) {
			throw new Error("BaseOperator#test: abstract method is not implemented");
		}
	}]);

	return BaseOperator;
})();

exports.BaseOperator = BaseOperator;
//# sourceMappingURL=baseOperator.js.map