const assert = require('assert');
const answer = require('./answer');

((testcase = 'longest_palindromic_substring') => {
  assert.equal(answer('babad'), 'bab', 'Not equal');
})();
