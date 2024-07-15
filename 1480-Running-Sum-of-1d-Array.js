/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = 0
    let cumulativeSum = []
    nums.map((el) => {
        sum = sum + el;
        cumulativeSum.push(sum)
    })
    return cumulativeSum
};