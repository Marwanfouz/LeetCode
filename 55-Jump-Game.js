/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max_reach = 0;
    for (let i = 0; i < nums.length; i++) {

        if (max_reach < i) {
            return false;
        }
        if (max_reach < (i + nums[i])) {
            max_reach = i + nums[i];
        }
         if (max_reach >= nums.length - 1) {
            return true; // If we can reach or exceed the last index, return true
        }
    }
    return false;
};
