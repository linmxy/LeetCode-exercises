module.exports = function (str) {
  let line1 = '', line2 = '', line3 = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0) {
      line1 += str[i];
    } else if (i % 4 === 2) {
      line3 += str[i];
    } else {
      line2 += str[i];
    }
  }
  return line1 + line2 + line3;
};