// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
//solved dec solution, dynamic programming, fibonacci sequence, optimal solution
//t:O(n) s:O(n)
var fib = function (n) {
	//create function that returns the fibonacci number at the given n integer value.
	let fibNumArray = []; //initialize fibNumArray as an empty array, to be filled with base cases and then subsequent F(n) up to and including F(n) for given n.

	fibNumArray[0] = 0; //assign the first element of array to base case where n = 0, and F(0) = 0.
	fibNumArray[1] = 1; //assign the second element of array to base case where n = 1, and F(1) = 1.

	for (let i = 2; i <= n; i++) {
		//iterate through the remaining monotonic integers up to and including n,
		fibNumArray[i] = fibNumArray[i - 1] + fibNumArray[i - 2]; //assign the current element in array to the F(i).
	}

	return fibNumArray[n]; //return the F(n) for the given n.
};

//solved tutorial solution, recursion, treat it like a tree, not the optimal solution
function fib(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(2)); //1
// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

console.log(fib(3)); //2
// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

console.log(fib(4)); //3
// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30
