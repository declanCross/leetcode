// Given a binary array nums, return the maximum number of consecutive 1's in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved dec solution, optimal, iteration
//t:O(n) s:O(1)
//create function that returns the maximum number of consecutive 1's in array nums.
const findMaxConsecutiveOnes = (nums) => {
	//initialize counters for the maximum consecutive 1's, and the current consecutive 1's.
	let maxConsOnes = 0;
	let consOnes = 0;

	//iterate through array nums
	for (let num of nums) {
		//if num is 1, increment consOnes counter.
		if (num === 1) {
			consOnes++;
			//else, if num is 0, reset consOnces counter to 0.
		} else {
			consOnes = 0;
		}
		//after each num check, if consOnes is higher than maxConsOnes, assign maxConsOnes value to the consOnes value.
		if (consOnes > maxConsOnes) maxConsOnes = consOnes;
	}
	//return the maximum number of consecutive 1's.
	return maxConsOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3
// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); //2
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

console.log(findMaxConsecutiveOnes([0])); //0
console.log(findMaxConsecutiveOnes([1])); //1

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
