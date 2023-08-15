// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
//solved tutorial solution
//t:O(m*n) s:O(m*n)
var floodFill = function (image, sr, sc, color) {
	//create function that flood fills matching, 4-directional squares in a matrix.
	const original = image[sr][sc]; //initialize original square to begin flood filling from.
	function recurse(image, sr, sc) {
		//create recursive function to flood fill.
		//check boundaries
		if (
			sr < 0 || //if the search row value is less than 0, or
			sr > image.length - 1 || //if the search row value is greater than image.length - 1, or
			sc < 0 || //if the search column value is less than 0, or
			sc > image[0].length - 1 || //if the search column value is greater than image.length - 1, or
			image[sr][sc] !== original || //if the square does not equal the original value, or
			image[sr][sc] === color //if the square is already equal to the changed color value,
		)
			return image; //return the image, we don't need to look at that square.
		image[sr][sc] = color; //otherwise, we have a valid square in need of flood filling, we assign the current square the value of color.
		recurse(image, sr + 1, sc); //recursively call the checker function with the square below itself.
		recurse(image, sr - 1, sc); //recursively call the checker function with the square above itself.
		recurse(image, sr, sc + 1); //recursively call the checker function with the square to the right of itself.
		recurse(image, sr, sc - 1); //recursively call the checker fucntion with the square to the left of itself.
		return image; //return the image.
	}
	return recurse(image, sr, sc); //initial call to the recursive checker function.
};

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// Constraints:
// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n
