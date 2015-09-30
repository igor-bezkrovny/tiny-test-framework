'use strict';

import { BaseOperator } from '../operators/baseOperator'

export class Expect {

	/**
	 * @param {*} value value to test
	 */
	constructor (value) {
		this._value = value;
		this._negate = false;
	}

	get not () {
		this._negate = !this._negate;
		return this;
	}

	to (operator) {
		if (operator instanceof BaseOperator) {
			const result = operator.test(this._value);
			return this._negate ? !result : result;
		}

		throw new Error("Expect#to: method argument expected to be a child of BaseOperator")
	}
}
