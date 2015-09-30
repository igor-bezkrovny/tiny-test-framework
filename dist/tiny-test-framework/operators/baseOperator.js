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
		key: '_checkForNumber',
		value: function _checkForNumber(value, valueOwner) {
			if (typeof value !== 'number') {
				throw new Error(valueOwner + ' argument should be a number. ' + typeof value + ' is taken');
			}
		}
	}, {
		key: '_checkForNaN',
		value: function _checkForNaN(value, valueOwner) {
			if (isNaN(value)) {
				throw new Error(valueOwner + ' argument should be a number. NaN is taken');
			}
		}
	}]);

	function BaseOperator(value) {
		_classCallCheck(this, BaseOperator);

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