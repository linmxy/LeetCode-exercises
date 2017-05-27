const assert = require('assert');
const answer = require('./answer');

((testcase = 'add two big numbers') => {
  var n1 = [2, 7, 1, 5], n2 = [3, 4, 7];
  var result = answer(n1, n2);
  assert.deepEqual(result, [2, 6, 0, 3], 'success');
})();
