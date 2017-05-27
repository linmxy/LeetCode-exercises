module.exports = function (array, target) {
  let hash = {}, indices;
  for (let num of array) {
    if (hash[target - num]) {
      indices = [target - num, num];
      break;
    } else {
      hash[num] = true;
    }
  }
  return indices;
};