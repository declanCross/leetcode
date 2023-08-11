// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//solved tutorial/dec solution, two pointer (three pointer)
//t:O(n) s:O(n)
function sortedSquares(nums) {
	//create function that returns a sorted array of the squares of the input array.
	const results = new Array(nums.length).fill(0); //initialize a new Array of length nums.length, filled with integer 0 placeholders.
	let left = 0; //initialize left pointer to beginning of array.
	let right = nums.length - 1; //initialize right pointer to end of array.
	let resultsIndex = nums.length - 1; //initialize resultsIndex pointer to end of results array.

	while (resultsIndex >= 0) {
		//while there is an element to assign value to in results array,
		let leftSquare = Math.pow(nums[left], 2); //initialize the left pointer's value to the square of it's value from nums.
		let rightSquare = Math.pow(nums[right], 2); //initialize the right pointer's value to the square of it's value from nums.
		if (leftSquare >= rightSquare) {
			//if the left pointer's squared value is greater than or equal to the right pointer's square value,
			results[resultsIndex] = leftSquare; //assign the rightmost available index from results array to the value from the left pointer's squared value,
			left++; //and increment the left pointer.
		}
		if (rightSquare > leftSquare) {
			//if the right pointer's squared value is greater than the left pointer's squared value,
			results[resultsIndex] = rightSquare; //assign the rightmost available index from results array to the right pointer's squared value,
			right--; //and decrement the right pointer.
		}
		resultsIndex--; //after each assignment, decrement resultsIndex to the next available index.
	}

	return results; //after results array is assigned appropriate values, return results array.
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
// Example 1:
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
