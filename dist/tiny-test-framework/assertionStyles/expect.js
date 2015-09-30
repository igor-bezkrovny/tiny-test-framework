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

		this._value = value;
		this._negate = false;
	}

	_createClass(Expect, [{
		key: 'to',
		value: function to(operator) {
			if (operator instanceof _operatorsBaseOperator.BaseOperator) {
				var result = operator.test(this._value);
				return this._negate ? !result : result;
			}

			throw new Error("Expect#to: method argument expected to be a child of BaseOperator");
		}
	}, {
		key: 'not',
		get: function get() {
			this._negate = !this._negate;
			return this;
		}
	}]);

	return Expect;
})();

exports.Expect = Expect;
//# sourceMappingURL=expect.js.map