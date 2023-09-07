// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved dec solution, optimal space complexity, sub-optimal time complexity.
//t:O(n^2) s:O(1)
// const findLHS = (nums) => {
// 	let harmLess;
// 	let harmMore;
// 	let harmSame;
// 	let currentLongHarm;
// 	let longHarm = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		harmLess = 1;
// 		harmMore = 1;
//     harmSame = 0;
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[j] === nums[i] - 1) harmLess++;
// 			if (nums[j] === nums[i] + 1) harmMore++;
// 			if (nums[j] === nums[i]) harmSame++;
// 		}
// 		if (harmLess > 1 || harmMore > 1)
// 			currentLongHarm = Math.max(harmLess + harmSame, harmMore + harmSame);
// 		if (currentLongHarm > 1) longHarm = Math.max(currentLongHarm, longHarm);
// 	}

// 	return longHarm;
// };

//solved help solution, optimal time and good space complexity.
//t:O(n) s:O(k)
// Define a function named findLHS that takes in an array of numbers as an argument
function findLHS(nums) {
	// Create a new Map object to store the frequency of each number in the input array
	const map = new Map();
	// Loop through the input array
	for (let i = 0; i < nums.length; i++) {
		// Set the value of the current number in the map to its current frequency plus one, or to one if it doesn't exist in the map yet
		map.set(nums[i], map.get(nums[i]) + 1 || 1);
	}
	// Initialize a variable to keep track of the maximum length of a harmonious subsequence
	let max = 0;
	// Loop through the entries in the map
	for (const [num, freq] of map) {
		// Check if the map has an entry for the current number plus one
		if (map.has(num + 1)) {
			// Update the maximum length of a harmonious subsequence to be the maximum of its current value and the sum of the frequencies of the current number and the current number plus one
			max = Math.max(freq + map.get(num + 1), max);
		}
	}
	// Return the maximum length of a harmonious subsequence
	return max;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

console.log(findLHS([1, 2, 3, 4])); //2

console.log(findLHS([1, 1, 1, 1])); //0

// Constraints:
// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109
