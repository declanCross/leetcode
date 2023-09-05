// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
//solved dec solution
//t:O(r*c) s:O(r*c)
//create function that returns reshaped matrix with r rows and c columns if there are matching numbers of cells in mat matrix.
const matrixReshape = (mat, r, c) => {
	//checking whether there are valid number of cells in newMatrix array based on r and c values.
	const newMatrixCells = r * c;
	const matCells = mat.length * mat[0].length;
	if (matCells !== newMatrixCells) return mat;
	//create new array, newMatrix, with r rows and c columns.
	let newMatrix = new Array(r).fill(0).map(() => new Array(c).fill(0));
	//change original array into an array of it's values.
	let matValues = mat.flat();
	//insert mat values into new matrix.
	let matValuesIndex = 0;
	for (let row of newMatrix) {
		for (let i = 0; i < c; i++) {
			row[i] = matValues[matValuesIndex];
			matValuesIndex++;
		}
	}
	//return new matrix.
	return newMatrix;
};

console.log(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		1,
		4
	)
); //[[1,2,3,4]]

console.log(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		2,
		4
	)
); //[[1,2],[3,4]]

console.log(
	matrixReshape(
		[
			[1, 2, 3, 4],
			[5, 6, 7, 8],
		],
		4,
		2
	)
); // [[1,2],[3,4],[5,6],[7,8]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300
