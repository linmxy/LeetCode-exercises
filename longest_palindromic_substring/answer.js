module.exports = function (str) {
  let start = 0, end = 0;

  let searchFrom = (head, tail) => {
    while (head >= 0 && tail <= str.length - 1) {
      if(str[head] !== str[tail]) {
        break;
      }
      if (tail - head > end - start) {
        start = head;
        end = tail;
      }
      head -= 1;
      tail += 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    searchFrom(i, i); //assume palindromic length is odd
    if (str[i] === str[i + 1]) {
      searchFrom(i, i + 1); //it's possible the palindromic length is even;
    }
  }
  return str.substring(start, end + 1);
};