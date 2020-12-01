/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let min = -1;
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        if (min < 0 && nums[i] === target) {
            min = i;
        }
        if (min > -1 && max < 0 && nums[i] !== target) {
            max = i - 1;
        }
    }
    if (min > -1 && max < 0) {
        max = nums.length - 1;
    }
    return [min, max];
};
