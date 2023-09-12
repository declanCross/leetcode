// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved ai solution, optimal
//t:O(n) s:O(1)
//create function that returns maximum product of three numbers from array nums.
const maximumProduct = (nums) => {
	//declare max and min variables.
	let max1 = -Infinity,
		max2 = -Infinity,
		max3 = -Infinity;
	let min1 = Infinity,
		min2 = Infinity;
	//iterate through nums.
	for (let num of nums) {
		//assign the three largest numbers to max1, max2, and max3.
		if (num > max1) {
			max3 = max2;
			max2 = max1;
			max1 = num;
		} else if (num > max2) {
			max3 = max2;
			max2 = num;
		} else if (num > max3) {
			max3 = num;
		}
		//assign the two smallest numbers to min1, and min2.
		if (num < min1) {
			min2 = min1;
			min1 = num;
		} else if (num < min2) {
			min2 = num;
		}
	}
	//return the largest product of the first three largest numbers, and the largest and two smallest numbers (to account for negative numbers).
	return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

console.log(maximumProduct([1, 2, 3])); //6

console.log(maximumProduct([1, 2, 3, 4])); //24

console.log(maximumProduct([-1, -2, -3])); //-6

console.log(maximumProduct([4, 3, 2, 1])); //24

console.log(maximumProduct([-5, 0, 5, 10])); //0

console.log(maximumProduct([1, 2, 3, 4, 4])); //48

console.log(maximumProduct([-100, -98, 1, 2, 3, 4])); //39200

console.log(maximumProduct([-100, -2, -3, 1])); //300

console.log(maximumProduct([-1, -2, 1, 2, 3])); //6

// Constraints:
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000
