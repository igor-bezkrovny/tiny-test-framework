'use strict';

import { BaseOperator } from './baseOperator'

export class EqOperator extends BaseOperator {
	test(value) {
		return value === this._value;
	}
}
