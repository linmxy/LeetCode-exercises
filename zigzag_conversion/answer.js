module.exports = function (str, numRows) {
  let rows = [], top = true;
  for (let i = 0; i < str.length; i++) {
    let rowNum = i % (numRows - 1);
    if (rowNum === 0) {
      rowNum = top ? 0 : numRows - 1;
      top = !top; //next time when the mode is zero, append to the last row;
    }
    rows[rowNum] = rows[rowNum] || '';
    rows[rowNum] += str[i];
  }
  console.log(rows.join(''));
  return rows.join('');
};