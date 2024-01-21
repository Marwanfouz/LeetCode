/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const normalized = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i = 0; i < normalized.length; i++) {
        if(normalized[i] !== normalized[normalized.length - i - 1]) {
            return false
        }
    }

    return true
};

// Runtime
// 61 ms Beats 71.82% of users with JavaScript
// Memory
// 51.47 MB Beats 7.47% of users with JavaScript
