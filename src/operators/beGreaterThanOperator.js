'use strict';

import { BaseOperator } from './baseOperator'

export class BeGreaterThanOperator extends BaseOperator {

	/**
	 * Check if test value (value) is greater than operator argument (this._value)
	 * @param {*} value
	 */
	test(value) {
		BaseOperator.checkForNumber(this._value, "beGreaterThan");
		BaseOperator.checkForNumber(value, "expect");

		BaseOperator.checkForNaN(this._value, "beGreaterThan");
		BaseOperator.checkForNaN(value, "expect");

		return value > this._value;
	}
}
