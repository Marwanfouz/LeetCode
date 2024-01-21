/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str == rev) ? true : false;
};


// Runtime
// 57 ms Beats 85.01% of users with JavaScript
// Memory
// 52.62 MB Beats 5.17% of users with JavaScript
