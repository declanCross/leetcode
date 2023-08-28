// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//solved dec solution
//t:O(n^n) s:O(n)
const findDisappearedNumbers = (nums) => {
	//create function that returns array of integers not present in array nums within range 1 <= num <= nums.length.
	let count = 1; //initialize counter.
	let results = []; //initialize results array.

	while (count <= nums.length) {
		//iterate through count from 1 to nums.length,
		if (!nums.includes(count)) {
			//if the count integer is not included in nums,
			results.push(count); //push the count integer to results array.
		}
		count++; //increment counter.
	}

	return results; //return results array.
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

console.log(findDisappearedNumbers([1, 1])); //[2]
// Example 2:
// Input: nums = [1,1]
// Output: [2]

console.log(findDisappearedNumbers([2, 3, 4])); //[1]

// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
