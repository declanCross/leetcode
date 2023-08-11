// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
//solved dec solution, minimum prefix sum
//t:O(n) s:O(1)
var minStartValue = function (nums) {
	//create function that returns the minimum prefix sum above 0.
	let minValue = 0; //initialize minValue to 0. This will be the minimum value placeholder for the array of nums, and represents the smallest number of consecutive sums.
	let sum = 0; //initialize sum to 0. This will be the currently checked sum of consecutive sums for array nums.
	let startValue; //initialize startValue, to be updated later to the minimum prefix sum above 0.

	for (let i = 0; i < nums.length; i++) {
		//iterate through array nums,
		sum += nums[i]; //update sum to be the sum value plus the current num value.
		if (sum < minValue) {
			//if the sum is smaller than the current minValue,
			minValue = sum; //update minValue to be equal to sum.
		}
	}

	startValue = 1 - minValue; //update startValue to be 1 - minValue, which gives a positive number above 0.
	return startValue; //return startValue, the minimum prefix sum above 0.
};

console.log(minStartValue([-3, 2, -3, 4, 2])); //5
// Example 1:
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
//   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

console.log(minStartValue([1, 2])); //1
// Example 2:
// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive.

console.log(minStartValue([1, -2, -3])); //5
// Example 3:
// Input: nums = [1,-2,-3]
// Output: 5

// Constraints:
// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100
