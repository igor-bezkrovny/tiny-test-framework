'use strict';

import { BaseOperator } from './baseOperator'

export class EqOperator extends BaseOperator {

	/**
	 * Check if test value (value) is equal to operator argument (this._value)
	 * @param {*} value
	 */
	test(value) {
		return value === this._value;
	}
}
