// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
//solved tutorial solution, sort, iterate
//t:O(nlogn) from using .sort() s:O(n)
var minimumAbsDifference = function (arr) {
	//create function that returns sorted pairs of the minimum absolute difference from array,
	arr.sort((a, b) => a - b); //sort the array, now we don't need to use the absolute value method.

	const result = []; //initialize result array.
	let min = Infinity; //initialize min absolute difference to be inifinity, will be overriden with first integer pair check.

	for (let i = 0; i < arr.length - 1; i++) {
		//iterate through arr until the last element,
		let diff = arr[i + 1] - arr[i]; //initialize diff being the difference between the larger and smaller integer pair.
		min = Math.min(diff, min); //assign min to be the smaller of the numbers between the current min value and the recently assigned diff value.
	}

	for (let j = 0; j < arr.length - 1; j++) {
		//iterate through arr until the last element,
		let diff = arr[j + 1] - arr[j]; //initialize diff being the difference between the larger and smaller integer pair.
		if (min === diff) {
			//if the min absolute difference is equal to the current pair's diff,
			result.push([arr[j], arr[j + 1]]); //push the pair into the result array.
		}
	}

	return result; //return result array.
};

// Example 1:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Example 3:
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

// Constraints:
// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106
