module.exports = function check(str, bracketsConfig) {
  const arrStr = str.split('');
  const bracketsConf = [...bracketsConfig].flat();
  const bracketIndexes = [];
  const sameBrackets = bracketsConf.filter((bracket, index, arr) => bracket === arr[index + 1]);
 
  for (let j = 0; j < arrStr.length; j++) {
    bracketIndex = bracketsConf.indexOf(arrStr[j]);
    if (sameBrackets.indexOf(arrStr[j]) !== -1) {
      if (bracketIndexes.indexOf(bracketIndex) !== -1) {
        bracketIndex = bracketsConf.lastIndexOf(arrStr[j]);
      }
    }
    if (!(bracketIndex % 2)) {
      bracketIndexes.push(bracketIndex);
    } else {
      if (bracketIndex === bracketIndexes[bracketIndexes.length - 1] + 1) {
        bracketIndexes.pop();
      } else {
        return false;
      }
    }
  }
  if (bracketIndexes.length === 0) {
    return true;
  }
  return false;
}
