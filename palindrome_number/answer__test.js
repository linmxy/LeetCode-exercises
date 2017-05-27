const assert = require('assert');
const answer = require('./answer');

((testcase = 'palindrome_number') => {
  assert.equal(answer(1234321), true, 'Not reversed');
})();
