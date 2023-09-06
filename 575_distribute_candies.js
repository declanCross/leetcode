// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
/**
 * @param {number[]} candyType
 * @return {number}
 */
//solved dec solution, not good time complexity, good space complexity, uses sort, counter and iteration.
//t:O(nlogn) s:O(n)
// create function that returns the max number of different types of candies Alice can eat if she can eat only half the candies she has, and she can eat only 1 of each type.
// const distributeCandies = (candyType) => {
// 	sortedCandyType = candyType.sort((a, b) => a - b);
// 	//initialize variables for counting the max candies and the number of different types of candies.
// 	const maxNumCandies = candyType.length / 2;
// 	let candyCompare;
// 	let candyTypeCounter = 0;
// 	//iterate through candyType, incrementing candyTypeCounter with each different type found.
// 	for (let candy of sortedCandyType) {
// 		if (candy !== candyCompare) {
// 			candyTypeCounter++;
// 			candyCompare = candy;
// 		}
// 	}
// 	//return the smaller number between candyTypeCounter and maxNumCandies.
// 	return Math.min(candyTypeCounter, maxNumCandies);
// };

//solved dec solution, good time complexity, good space complexity, uses iteration to make a set.
//t:O(n) s:O(n)
// create function that returns the max number of different types of candies Alice can eat if she can eat only half the candies she has, and she can eat only 1 of each type.
const distributeCandies = (candyType) => {
	//initialize variables for counting the max candies and the different types of candies within a set.
	const maxNumCandies = candyType.length / 2;
	let uniqueCandyTypes = new Set();
	//iterate through candyType, and add the unique values to the set.
	for (let candy of candyType) {
		uniqueCandyTypes.add(candy);
	}
	//return the smaller number between uniqueCandyTypes and maxNumCandies.
	return Math.min(uniqueCandyTypes.size, maxNumCandies);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); //3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

console.log(distributeCandies([1, 1, 2, 3])); //2
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

console.log(distributeCandies([6, 6, 6, 6])); //1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

// Constraints:
// n == candyType.length
// 2 <= n <= 104
// n is even.
// -105 <= candyType[i] <= 105
