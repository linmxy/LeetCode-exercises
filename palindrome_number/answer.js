module.exports = function (x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) {
    return false;
  }
  //only reversing till half and then compare
  var sum =  0;
  while (x > sum) {
    sum = sum * 10 + x % 10;
    x = x / 10;
  }
  return (x == sum) || (x == sum / 10);
};