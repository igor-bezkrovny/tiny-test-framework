'use strict';

var _tinyTestFrameworkTinyTestFramework = require('../tiny-test-framework/tiny-test-framework');

console.log((0, _tinyTestFrameworkTinyTestFramework.expect)(3).to((0, _tinyTestFrameworkTinyTestFramework.eq)(3))); // should return true
console.log((0, _tinyTestFrameworkTinyTestFramework.expect)(3).not.to((0, _tinyTestFrameworkTinyTestFramework.eq)(3))); // should return false
console.log((0, _tinyTestFrameworkTinyTestFramework.expect)(4).to((0, _tinyTestFrameworkTinyTestFramework.beGreaterThan)(3))); // should return true

// additional tests
console.log((0, _tinyTestFrameworkTinyTestFramework.expect)(4).to((0, _tinyTestFrameworkTinyTestFramework.beGreaterThan)(4))); // should return false
console.log((0, _tinyTestFrameworkTinyTestFramework.expect)(4).not.not.to((0, _tinyTestFrameworkTinyTestFramework.eq)(4))); // should return true
console.log((0, _tinyTestFrameworkTinyTestFramework.expect)((0, _tinyTestFrameworkTinyTestFramework.expect)(2).not.to((0, _tinyTestFrameworkTinyTestFramework.eq)(2))).to((0, _tinyTestFrameworkTinyTestFramework.eq)(false))); // should return true
//# sourceMappingURL=test.js.map