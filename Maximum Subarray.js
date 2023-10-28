// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let max = nums[0];
  let highestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    max = Math.max(n, max + n);
    highestSum = Math.max(highestSum, max);
  }

  return highestSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
