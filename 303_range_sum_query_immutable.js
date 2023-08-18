// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
//solved dec solution, class construction, method instantiation
class NumArray {
	//create class NumArray to handle a sumRange method that adds nums within the index range specified, inclusive.
	constructor(nums) {
		//create constructor with input nums,
		this.nums = nums; //initialize nums.
	}

	sumRange(left, right) {
		//create method sumRange to add nums within the left, right indices range specified, inclusive,
		let sum = 0; //initialize sum variable.
		while (left <= right) {
			//while the left pointer is within valid range,
			sum += this.nums[left]; //add the left pointers this.nums value to the sum.
			left++; //increment left pointer.
		}
		return sum; //return sumRange sum.
	}
}

let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj);
console.log(obj.sumRange(0, 2)); //1
console.log(obj.sumRange(2, 5)); //-1
console.log(obj.sumRange(0, 5)); //-3

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Example 1:
// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

// Constraints:
// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= left <= right < nums.length
// At most 104 calls will be made to sumRange.
