/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sList = s.split('').sort();
    let tList = t.split('').sort();
    for (let i = 0; i < sList.length; i++) {
        if (sList[i] !== tList[i]) {
        return false;
        }
    }
    return true;
};
