// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved dec solution
//t:O(nlogn) s:O(1)
//create function that returns the maximum sum, taking the Math.min() of grouped integer values of array nums.
const arrayPairSum = (nums) => {
	//sort nums in descending order
	nums = nums.sort((a, b) => b - a);
	//initialize left and right pointers, and the maxSum to hold the result.
	let left = 0;
	let right = 1;
	let maxSum = 0;
	//iterate through nums,
	while (right < nums.length) {
		//add the minimum value of the largest two integers from sorted array nums.
		maxSum += Math.min(nums[left], nums[right]);
		//reassign left and right pointers to the next two integers.
		left = right + 1;
		right = left + 1;
	}
	//return resulting maximum sum.
	return maxSum;
};

console.log(arrayPairSum([1, 4, 3, 2])); //4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); //9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

console.log(arrayPairSum([3, 6, 9, -2, -4, -6])); //-2

// Constraints:
// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104
