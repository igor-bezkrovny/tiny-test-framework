'use strict';

/**
 * @abstract
 */
export class BaseOperator {

	/**
	 * Checks and throws exception if value is not a number
	 * @param {*} value value to check
	 * @param {string} valueOwner value owner name, for example, "operator"
	 */
	static checkForNumber(value, valueOwner) {
		if(typeof value !== 'number') {
			throw new Error(`${valueOwner} argument should be a number. ${typeof value} is taken`);
		}
	}

	/**
	 * Checks and throws an exception if the value is 'not a number' number (isNaN)
	 * @param {*} value value to check
	 * @param {string} valueOwner value owner name, for example, "operator"
	 */
	static checkForNaN(value, valueOwner) {
		if(isNaN(value)) {
			throw new Error(`${valueOwner} argument should be a number. NaN is taken`);
		}
	}

	constructor(value) {

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
	test(value) {
		throw new Error("BaseOperator#test: abstract method is not implemented");
	}

}
