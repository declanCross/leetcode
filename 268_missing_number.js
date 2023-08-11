// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
//Dec solution SOLVED
// var missingNumber = function(nums) {
//     nums = nums.sort((a, b) => a - b);

//     if (nums[0] !== 0) return 0;

//     if (nums.length > 1) {
//         for ( let i = 0; i < nums.length; i++) {
//             if (nums[i + 1] !== nums[i] + 1) return nums[i] + 1;
//         }
//     }
    
//     return nums.length;
// };

//Tutorial optimal solution SOLVED g sum algorithm (n * (n+1) / 2)
var missingNumber = function(nums) {
    const gSum = nums.length * (nums.length + 1) / 2;
    const numSum = nums.reduce((acc, element) => acc + element, 0);

    return gSum - numSum;
};

console.log(missingNumber([3,0,1])); //2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([0,1])); //2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([9,6,4,2,3,5,7,0,1])); //8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

console.log(missingNumber([1])); //0

console.log(missingNumber([0])); //1

console.log(missingNumber([1,2])); //0