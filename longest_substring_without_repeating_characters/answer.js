// 'abcabcbb' >  'abc'.length > 3

module.exports = function (str) {
  var max = 0, hash = {}; //<char - newest position>
  for (let i = 0, j = 0; i < str.length; i++) {
    let c = str[i];
    if (hash[c] !== undefined) {
      j = Math.max(j, hash[c] + 1)
    }
    hash[c] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
};