// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved, optimal
//t:O(n) s:O(1)
const findLengthOfLCIS = (nums) => {
	let lcis = -Infinity;
	let counter = 1;

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i]) {
			counter++;
		} else {
			if (counter > lcis) lcis = counter;
			counter = 1;
		}
	}

	if (counter > lcis) lcis = counter;

	return lcis;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); //3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.

console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); //1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

console.log(findLengthOfLCIS([1, 2, 3, -4, -3, -2, -1, 9, 10])); //6

// Constraints:
// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109
