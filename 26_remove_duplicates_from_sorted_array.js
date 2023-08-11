/**
 * @param {number[]} nums
 * @return {number}
 */
//Dec solution SOLVED
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] === nums[i-1]) || (nums[i] === nums[i+1])) {
            nums.splice([i], 1);
            i--;
        } else {
            continue;
        }
    }
    return nums.length;
};

var nums = [1,1,1,1];

console.log(removeDuplicates(nums));