module.exports = function (array, target) {
  let compressing = str.split('').reduce((ret,c, index, arr) => {
    if(ret.char && c !== ret.char || index === arr.length -1){
      ret.compressed += `${ret.char}${ret.num}`;
    }
    if(c === ret.char) {
      ret.num += 1;
    } else {
      ret.char = c;
      ret.num = 1;
    } 
    return ret;
  }, {char: null, num: 0, compressed: ''});
  return compressing.compressed;
};
