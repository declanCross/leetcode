// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
//solved dec solution, matrix, array, optimal solution
//t:O(n) s:O(n)
var transpose = function (matrix) {
	//create function that returns the transpose of matrix.
	let result = Array.from({ length: matrix[0].length }, () => []); //initialize result array of the length of first element of matrix.
	for (let i = 0; i < matrix[0].length; i++) {
		//for each number within the first matrix element,
		let rightElement = 1; //initialize rightElement pointer to the second element of matrix.
		let rightIndex = i; //initialize rightIndex pointer to the index of the number we are looking at.
		result[i].push(matrix[0][i]); //push the number from the first matrix element to the result array as the first number of the element we are pushing to.
		while (rightElement < matrix.length) {
			//while rightElement is checking an element within matrix,
			result[i].push(matrix[rightElement][rightIndex]); //push the number at the element being checked to the result array, as part of the element we are pushing to.
			rightElement++; //increment rightElement pointer to the next element in matrix array.
		}
	}
	return result; //return result array.
};
//solved tutorial solution, matrix, array
//t:O(n^2) s:O(n)
function transpose(matrix) {
	//create function that returns the tranpose of matrix.
	const result = Array.from(
		{ length: matrix[0].length },
		() =>
			//initialize result array of the length of the first element of matrix.
			new Array(matrix.length).fill(0) //populate the result array with new arrays of length of the number of elements in matrix, populated with 0s.
	);
	for (let r = 0; r < matrix.length; r++) {
		//for each row in matrix,
		for (let c = 0; c < matrix[0].length; c++) {
			//for each column in the first matrix element,
			result[c][r] = matrix[r][c]; //assign result at the column index, at the row index, to be the matrix at the row index, at the column index.
		}
	}
	return result; //return result array.
}

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109
