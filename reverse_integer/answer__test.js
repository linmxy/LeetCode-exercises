const assert = require('assert');
const answer = require('./answer');

((testcase = 'reverse_integer') => {
  assert.equal(answer(123456), 654321, 'Not reversed');
})();
