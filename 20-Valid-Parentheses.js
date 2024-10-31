/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let char of s) {
    if (obj[char]) {
      stack.push(char);
    } else {
      if (obj[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};