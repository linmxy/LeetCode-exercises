module.exports = function (array1, array2) {
  var result = [];
  while (array1.length || array2.length) {
    let temp = (array1.pop() || 0) + (array2.pop() || 0);
    result.push(temp);
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] && result[i] >= 10) {
      result[i] = result[i] % 10;
      result[i + 1] += 1;
    }
  }
  return result;
};