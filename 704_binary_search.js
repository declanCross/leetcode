// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//solved dec solution, binary search
//t:O(logn) s:O(1)
var search = function(nums, target) { //create function that returns the index value of target from array nums and returns -1 if target is not present in array.
    let left = 0; //initialize left pointer at beginning of array.
    let right = nums.length - 1; //initialize right pointer at end of array.

    while (left <= right) { //iterate through array while left pointer is to the left of or the same as right pointer,
        let mid = left + Math.floor((right - left) / 2); //initialize mid pointer as the iterative middle of the subarray between left and right pointers.

        if (nums[mid] === target) return mid; //if the mid value is equal to the target, return the mid index value.

        if (target < nums[mid]) { //if the target is to the left of the mid point,
            right = mid - 1; //move the right pointer one place to the left of the mid pointer to look at the subarray to the left of mid.
        } else { //otherwise, if the target is to the right of the mid point,
            left = mid + 1; //move the left pointer one place to the right of the mid pointer to look at the subarray to the right of mid.
        }
    }

    return -1; //if you made it through array without returning the target index location, then the target is not present in array, return -1.
};

console.log(search([-1,0,3,5,9,12], 9)); //4
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.