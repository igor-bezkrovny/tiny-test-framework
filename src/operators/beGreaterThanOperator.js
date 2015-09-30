'use strict';

import { BaseOperator } from './baseOperator'

export class BeGreaterThanOperator extends BaseOperator {
	test(value) {
		BaseOperator._checkForNumber(this._value, "beGreaterThan");
		BaseOperator._checkForNumber(value, "expect");

		BaseOperator._checkForNaN(this._value, "beGreaterThan");
		BaseOperator._checkForNaN(value, "expect");

		return value > this._value;
	}
}
