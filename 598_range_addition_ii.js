// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
//solved ai solution
//t:O(n) s:O(1)
//create function that returns the smallest matrix area between the provided m and n values and the ops[i] values.
const maxCount = (m, n, ops) => {
	//define the initial matrix.
	let minRow = m;
	let minCol = n;
	//iterate through ops, reassigning the minRow and minCol values as you encounter them.
	for (let i = 0; i < ops.length; i++) {
		minRow = Math.min(minRow, ops[i][0]);
		minCol = Math.min(minCol, ops[i][1]);
	}
	//return the smallest matrix area.
	return minRow * minCol;
};

console.log(
	maxCount(3, 3, [
		[2, 2],
		[3, 3],
	])
); //4
// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

console.log(
	maxCount(3, 3, [
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
	])
); //4
// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4

console.log(maxCount(3, 3, [])); //9
// Input: m = 3, n = 3, ops = []
// Output: 9

console.log(maxCount(40000, 40000, [])); //

// Constraints:
// 1 <= m, n <= 4 * 104
// 0 <= ops.length <= 104
// ops[i].length == 2
// 1 <= ai <= m
// 1 <= bi <= n
