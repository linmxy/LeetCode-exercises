const assert = require('assert');
const answer = require('./answer');

((testcase = 'longest_substring_without_repeating_characters') => {
  assert.equal(answer('abcabcbb'), 'abc'.length, 'Not equal');
})();
