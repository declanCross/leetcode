// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//solved dec solution
//t:O(n) s:O(n)
//create function that returns the duplicate and missing number from an array of 1 to nums.length using nums values.
const findErrorNums = (nums) => {
	//declare variables for map, and the duplicate and missing number.
	let map = {};
	let numTwice;
	let numMissing;

	//iterate through nums, creating a map of num:occurrences,
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (!map[num]) {
			map[num] = 1;
		} else {
			map[num]++;
			//the duplicate value is the num that already exists within map.
			numTwice = num;
		}
	}
	//iterate through an array of 1 to nums.length,
	for (let num = 1; num <= nums.length; num++) {
		//if the number is not in map,
		if (!map[num]) {
			//the missing number is the num.
			numMissing = num;
			break;
		}
	}
	//return the duplicate and missing number.
	return [numTwice, numMissing];
};

console.log(findErrorNums([1, 2, 2, 4])); //[2,3]

console.log(findErrorNums([1, 1])); //[1,2]

console.log(findErrorNums([2, 2])); //[2,1]

console.log(findErrorNums([3, 2, 2])); //[2,1]

console.log(findErrorNums([3, 2, 3, 4, 6, 5])); //[3,1]

// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104
