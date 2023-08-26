// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved dec solution
//t:O(n) s:O(n)
const thirdMax = (nums) => {
	//create function that returns the third distinct maximum number in an array when there is one, and returns the maximum number otherwise.
	let max1 = -Infinity; //initialize largest maximum.
	let max2 = -Infinity; //initialize second largest maximum.
	let max3 = -Infinity; //initialize third largest maximum.

	for (let num of nums) {
		//iterate through nums,
		if (num > max1) {
			//if num is larger than largest maximum,
			max3 = max2; //assign max3 to the previous value of max2,
			max2 = max1; //assign max2 to the previous value of max1,
			max1 = num; //assign max1 to num, the new largest maximum.
			continue; //continue next num check.
		}
		if (num > max2) {
			//if num is larger than second largest maximum,
			if (num === max1) continue; //if num is equal to max1, continue next num check.
			max3 = max2; //assign max3 to the previous value of max2,
			max2 = num; //assign max2 to num, the new second largest maximum.
			continue; //continue next num check.
		}
		if (num > max3) {
			//if num is larger than the third largest maximum,
			if (num === max2) continue; //if num is equal to max2, continue next num check.
			max3 = num; //assign max3 to num, the new third largest maximum.
		}
	}

	if (max3 > -Infinity) return max3; //if there is a max3 value, return it.
	return max1; //if there is not a third largest maximum, return the largest maximum.
};

console.log(thirdMax([3, 2, 1])); //1
// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

console.log(thirdMax([1, 2])); //2
// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

console.log(thirdMax([2, 2, 3, 1])); //1
// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

console.log(thirdMax([1, 2, 3, 4, 1, 2, 3, 4])); //2
console.log(thirdMax([1, 2, 3, 4, 1, 2, 3, 4, 5])); //3
console.log(thirdMax([1, 2, -2147483648])); //-2147483648

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
