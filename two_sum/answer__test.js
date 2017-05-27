const assert = require('assert');
const answer = require('./answer');

((testcase = 'should find correct indexes') => {
  var nums = [2, 7, 11, 15], target = 9;
  var result = answer(nums, target);
  assert(result[0] === 2 && result[1] === 7, 'success');
})();
