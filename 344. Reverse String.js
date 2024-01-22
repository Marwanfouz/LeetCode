/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const size = s.length;

    for (let i = 0; i < Math.floor(size / 2); i++) {
      [s[i], s[size - i - 1]] = [s[size - i - 1], s[i]];
    }
    return s;
  };

// Runtime
// 78 ms Beats 67.49% of users with JavaScript
// Memory
// 56.50 MB Beats 5.06% of users with JavaScript
