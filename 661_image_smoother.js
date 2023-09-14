// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

// Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
//solved dec solution
//t:O(n*m) s:O(n*m)
// const imageSmoother = (img) => {
// 	//create return matrix array
// 	let newImg = img.map((row) => row.map(() => 0));
// 	//iterate through img matrix array, assigning summed cell values to return matrix array
// 	for (let ri = 0; ri < img.length; ri++) {
// 		for (let ci = 0; ci < img[0].length; ci++) {
// 			let cell = img[ri][ci];
// 			let sums = [];
// 			let left = ci - 1;
// 			let up = ri - 1;
// 			let right = ci + 1;
// 			let down = ri + 1;
// 			sums.push(cell);
// 			if (img[up]) {
// 				sums.push(img[up][ci]);
// 				if (img[up][left] >= 0) sums.push(img[up][left]);
// 				if (img[up][right] >= 0) sums.push(img[up][right]);
// 			}
// 			if (img[ri][left] >= 0) sums.push(img[ri][left]);
// 			if (img[ri][right] >= 0) sums.push(img[ri][right]);
// 			if (img[down]) {
// 				sums.push(img[down][ci]);
// 				if (img[down][left] >= 0) sums.push(img[down][left]);
// 				if (img[down][right] >= 0) sums.push(img[down][right]);
// 			}
// 			let sum = sums.reduce((acc, curr) => acc + curr, 0);
// 			newImg[ri][ci] = Math.floor(sum / sums.length);
// 		}
// 	}
// 	//return matrix array
// 	return newImg;
// };

// Your current solution has a time complexity of O(m*n) and a space complexity of O(m*n), where m is the number of rows and n is the number of columns in the image. This is because you're creating a new image of the same size as the input and iterating over each pixel in the image once.

// However, you can optimize your solution to reduce the space complexity to O(1) by updating the original image in-place instead of creating a new one. Here's how you can do it:
//solved ai solution, optimal.
//t:O(n*m) s:O(1)
const imageSmoother = (img) => {
	const dx = [-1, 0, 1];
	const dy = [-1, 0, 1];
	const m = img.length;
	const n = img[0].length;
	const result = Array.from({ length: m }, () => Array(n).fill(0));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let sum = 0;
			let count = 0;
			for (let x of dx) {
				for (let y of dy) {
					let newX = i + x;
					let newY = j + y;
					if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
						sum += img[newX][newY];
						count++;
					}
				}
			}
			result[i][j] = Math.floor(sum / count);
		}
	}

	return result;
};

// In this code:
// - `dx` and `dy` are arrays that represent the relative positions of a pixel's neighbors.
// - `m` and `n` are the number of rows and columns in the image, respectively.
// - `result` is an array that will store the smoothed image.
// - The outer two loops iterate over each pixel in the image.
// - The inner two loops iterate over each neighbor of the current pixel.
// - `newX` and `newY` are the coordinates of the neighbor being considered.
// - If these coordinates are valid (i.e., they are inside the image), the value of this neighbor is added to `sum` and `count` is incremented.
// - After all neighbors have been considered, the average is calculated by dividing `sum` by `count`, rounding down to the nearest integer, and stored in `result[i][j]`.
// - Finally, `result` is returned.

// This solution still has a time complexity of O(m*n) because it still needs to iterate over each pixel once. However, its space complexity is O(1) because it does not use any additional space that scales with the size of the input. The space used by `dx`, `dy`, and `result` is constant because it does not depend on the size of the input image. Please note that this solution modifies the original image. If you need to keep the original image unchanged, you would need to make a copy of it before applying the smoother, which would bring the space complexity back to O(m*n).

// Please also note that these complexities assume that operations like addition, division, and accessing elements in an array can be done in constant time. If these operations take longer, the time complexity could be higher. However, in practice, these operations are usually very fast compared to the time it takes to iterate over all pixels in an image.

// I hope this helps! Let me know if you have any other questions.

console.log(
	imageSmoother([
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	])
); //[[0,0,0],[0,0,0],[0,0,0]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0

console.log(
	imageSmoother([
		[100, 200, 100],
		[200, 50, 200],
		[100, 200, 100],
	])
); //[[137,141,137],[141,138,141],[137,141,137]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138

// Constraints:
// m == img.length
// n == img[i].length
// 1 <= m, n <= 200
// 0 <= img[i][j] <= 255
