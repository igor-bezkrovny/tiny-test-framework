'use strict';

/**
 * @abstract
 */
export class BaseOperator {

	static _checkForNumber(value, valueOwner) {
		if(typeof value !== 'number') {
			throw new Error(`${valueOwner} argument should be a number. ${typeof value} is taken`);
		}
	}

	static _checkForNaN(value, valueOwner) {
		if(isNaN(value)) {
			throw new Error(`${valueOwner} argument should be a number. NaN is taken`);
		}
	}

	constructor(value) {
		this._value = value;
	}

	/**
	 * @abstract
	 * @param {*} value
	 */
	test(value) {
		throw new Error("BaseOperator#test: abstract method is not implemented");
	}

}
