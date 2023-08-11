// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	//create function that returns true if array is monotonic increasing or decreasing or same, false otherwise,
	const isSame = nums[0] === nums[nums.length - 1]; //initialize isSame variable for array nums that has same first and last element, middle should be same for true.
	const isIncreasing = nums[0] < nums[nums.length - 1]; //initialize isIncreasing var for nums that has first element less than last element.
	const isDecreasing = nums[0] > nums[nums.length - 1]; //initialize isDecreasing var for nums that has first element greater than last element.

	if (isSame) {
		//if isSame is true,
		for (let i = 1; i < nums.length; i++) {
			//iterate through nums, starting with the second element,
			if (nums[i - 1] !== nums[i]) return false; //and compare the previous with current element, returning false if they are not equal.
		}
	}

	if (isIncreasing) {
		//if isIncreasing is true,
		for (let i = 1; i < nums.length; i++) {
			//iterate through nums, starting with the second element,
			if (nums[i - 1] > nums[i]) return false; //and compare the previous with current element, returning false if they are decreasing.
		}
	}

	if (isDecreasing) {
		//if isDecreasing is true,
		for (let i = 1; i < nums.length; i++) {
			//iterate through nums, starting with the second element,
			if (nums[i - 1] < nums[i]) return false; //and compare the previous with current element, returning false if they are increasing.
		}
	}

	return true; //if you make it through the iteration, this is monotonic, return true.
};

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Example 2:
// Input: nums = [6,5,4,4]
// Output: true

// Example 3:
// Input: nums = [1,3,2]
// Output: false

// Constraints:
// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
