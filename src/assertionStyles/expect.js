'use strict';

import { BaseOperator } from '../operators/baseOperator'

export class Expect {

	/**
	 * @param {*} value value to test
	 */
	constructor (value) {
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
	get not () {
		this._isNegate = !this._isNegate;
		return this;
	}

	/**
	 * Expects instance of BaseOperator Child (instance of EqOperator/BeGreaterThanOperator)
	 * use functions eq(value)/beGreaterThan(value)
	 * @see {@link eq}
	 * @see {@link beGreaterThan}
	 * @param {BaseOperator} operator
	 * @returns {boolean}
	 */
	to (operator) {
		if (operator instanceof BaseOperator) {
			const result = operator.test(this._value);
			return this._isNegate ? !result : result;
		}

		throw new Error("Expect#to: method argument expected to be a child of BaseOperator")
	}
}
