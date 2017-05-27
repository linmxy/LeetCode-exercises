module.export = function (array, target) {
  let hash = {}, indices;
  for (i in array) {
    if (hash[target - i]) {
      indices = [target - i, i];
      break;
    } else {
      hash[i] = true;
    }
  }
  return indices;
};