/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      if (nums.length === 0) {
      return 0;
  }
  
  let k = 1;
  
      for (let i = 2; i < nums.length; i++) {
        if (nums[k - 1] !== nums[i]) {
          k++;
          nums[k] = nums[i];
        }
      }
  return k + 1;
};
