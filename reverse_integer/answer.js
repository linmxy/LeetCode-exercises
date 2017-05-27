module.exports = function (number) {
  let rev = 0, tail = number;
  let length = Math.floor(Math.log10(number)) + 1;
  for (let i = 0; i < length; i++) {
    rev = rev * 10 + tail % 10;
    tail = Math.floor(tail / 10);
  }
  return number >= 0 ? rev : -rev;
};