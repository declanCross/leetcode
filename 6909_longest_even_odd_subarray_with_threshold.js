/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

// You are given a 0-indexed integer array nums and an integer threshold.

// Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:

// nums[l] % 2 == 0
// For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
// For all indices i in the range [l, r], nums[i] <= threshold
// Return an integer denoting the length of the longest such subarray.
//Dec solution SOLVED
var longestAlternatingSubarray = function (nums, threshold) {
	//create function that returns length of longest even odd subarray.
	let l = 0; //
	let r = 0;
	let ranges = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 0 && nums[i] <= threshold) {
			l = i;
			r = i;

			while (nums[r + 1] % 2 !== nums[r] % 2 && nums[r + 1] <= threshold) {
				r++;
			}

			ranges.push(r - l + 1);
			i = r;
		}
	}

	return ranges.reduce((acc, curr) => {
		return acc > curr ? acc : curr;
	}, 0);
};

console.log(
	longestAlternatingSubarray(
		[1, 2, 3, 4, 5, 7, 2, 3, 4, 5, 6, 9, 2, 3, 4, 5],
		8
	)
); //5

console.log(longestAlternatingSubarray([1, 2], 2)); //1
