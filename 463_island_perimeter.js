// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
/**
 * @param {number[][]} grid
 * @return {number}
 */
//solved dec solution
//t:O(n*m) s:O(1)
//create function that returns perimeter of connected squares within grid.
const islandPerimeter = (grid) => {
	//initialize variables, to be reassigned values as we iterate through arrays.
	let perimeter = 0;
	let squareSides = 0;
	let row;
	let prevRow;
	let nextRow;
	let square;
	let prevSquare;
	let nextSquare;

	//iterate through grid rows,
	for (let ri = 0; ri < grid.length; ri++) {
		//assign values for the current row, previous row, and next row, for comparison later.
		row = grid[ri];
		prevRow = grid[ri - 1];
		nextRow = grid[ri + 1];
		//iterate through row squares,
		for (let ci = 0; ci < grid[ri].length; ci++) {
			//assign values for the current square, previous square, and next square, for comparison.
			square = row[ci];
			prevSquare = row[ci - 1];
			nextSquare = row[ci + 1];
			//if the current square is 1,
			if (square === 1) {
				//start with 4 valid sides, and compare the squares above, below, left and right, and remove a side if any of those squares are 1.
				squareSides = 4;
				if (prevRow && prevRow[ci] === 1) squareSides--;
				if (nextRow && nextRow[ci] === 1) squareSides--;
				if (prevSquare && prevSquare === 1) squareSides--;
				if (nextSquare && nextSquare === 1) squareSides--;
				//update perimeter value to include the number of valid sides of this square.
				perimeter += squareSides;
			}
		}
	}
	//return perimeter of coonnected squares within grid.
	return perimeter;
};

console.log(
	islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
); //16
// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

console.log(islandPerimeter([[1]])); //4
// Example 2:
// Input: grid = [[1]]
// Output: 4

console.log(islandPerimeter([[1, 0]])); //4
// Example 3:
// Input: grid = [[1,0]]
// Output: 4

// Constraints:
// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.
