// running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // console.log(sum)
        nums[i] = sum;
        // console.log(nums)
    }
    return nums;
};

console.log(runningSum([1,2,3,4,5,6,7,8,9,10]));