const assert = require('assert');
const answer = require('./answer');

((testcase = 'zigzag_conversion') => {
  assert.equal(answer('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR', 'Not converted');
})();
