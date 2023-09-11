// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
//solved dec solution
//t:O(n*m) s:O(n)
//create function that returns an array of the strings with the minimum index sum.
var findRestaurant = function (list1, list2) {
	//declare main variables for calculating the minimum index sum and the string(s) at the minimum index sum.
	let minIndexSum = Infinity;
	let minIndexSumStrings = [];
	//iterate through list1,
	for (let i = 0; i < list1.length; i++) {
		//declare variable for tracking the current word from list1.
		let word = list1[i];
		//if the word is present in list2,
		if (list2.includes(word)) {
			//declare the current sum of both indeces of word from list1 and list2.
			let sum = i + list2.indexOf(word);
			//if the sum is equal to the minIndexSum,
			if (sum === minIndexSum) {
				//push the word into the minIndexSumStrings array, as there are multiple strings with the same minIndexSum.
				minIndexSumStrings.push(word);
			}
			//if the sum is less than minIndexSum,
			if (sum < minIndexSum) {
				//reassign minIndexSum to equal sum.
				minIndexSum = sum;
				//reassign minIndexSumStrings to equal an array with string word, as this word has the minIndexSum.
				minIndexSumStrings = [word];
			}
		}
	}
	//return the array of strings with the minimum index sum.
	return minIndexSumStrings;
};

console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		[
			"Piatti",
			"The Grill at Torrey Pines",
			"Hungry Hunter Steakhouse",
			"Shogun",
		]
	)
); //["Shogun"]
// Explanation: The only common string is "Shogun".

console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["KFC", "Shogun", "Burger King"]
	)
); //["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); //["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

// Constraints:
// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.
