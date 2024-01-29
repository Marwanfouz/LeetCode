/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0;
    let index2 = numbers.length - 1 ;  
    while (numbers[index1] + numbers[index2] !== target) {
        if (numbers[index1] + numbers[index2] > target) {
            index2--;
        } else {
            index1++;
        }
    }  
    return [index1 + 1, index2 + 1];
};
// Runtime
// 40 ms Beats 99.52% of users with JavaScript
// Memory
//49.92 MB Beats 11.25% of users with JavaScript
