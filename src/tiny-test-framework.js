'use strict';

import { Expect } from './assertionStyles/expect';
import { EqOperator } from './operators/eqOperator';
import { BeGreaterThanOperator } from './operators/beGreaterThanOperator';

/**
 * @param {*} value base value
 */
export function expect(value) {
	return new Expect(value);
}

/**
 * @param {*} value value to check for equality
 */
export function eq(value) {
	return new EqOperator(value);
}

/**
 * @param {*} value value to check for being greater
 */
export function beGreaterThan(value) {
	return new BeGreaterThanOperator(value);
}

