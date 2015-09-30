'use strict';

import {expect, eq, beGreaterThan} from '../tiny-test-framework/tiny-test-framework'

console.log(  expect( 3 ).to( eq(3) )                   ); // should return true
console.log(  expect( 3 ).not.to( eq(3) )               ); // should return false
console.log(  expect( 4 ).to( beGreaterThan(3) )        ); // should return true
