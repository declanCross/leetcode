// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
//tutorial solution solved dynamic programming, bottom-up, optimal sub-structure, fibonnaci sequence
var climbStairs = function (n) {
	//Create function that returns the number of distinct ways to climb to top of n stairs with 1 or 2 step increments.
	let dpArray = []; //Declare an empty dynamic programming array to fill up with solutions to the number of stairs.

	dpArray[1] = 1; //Assign value 1 at index 1 as the solution for 1 stair.
	dpArray[2] = 2; //Assign value 2 at index 2 as the solution for 2 stairs.

	for (let i = 3; i <= n; i++) {
		//Iterate through array of each stair number from stair 3 to stair n,
		dpArray[i] = dpArray[i - 1] + dpArray[i - 2]; //Assign value at each stair index location to the sum of the two stair values before it.
	}

	return dpArray[n]; //Return the value of dpArray at position n
};

console.log(climbStairs(2)); //2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

console.log(climbStairs(3)); //3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

console.log(climbStairs(8)); //34
