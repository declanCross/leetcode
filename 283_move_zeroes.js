// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//solved tutorial solution, iterate through twice, two pointer
//t:O(n) s:O(1)
var moveZeroes = function(nums) { //create a function that returns a modified array nums with zero integers at the end of array.
    let lastNonZeroIndex = 0; //initialize lastNonZeroIndex value to 0.

    for (let i = 0; i < nums.length; i++) { //iterate through nums,
        if (nums[i] !== 0) { //if the integer is not 0,
            nums[lastNonZeroIndex] = nums[i]; //set nums at the lastNonZeroIndex location to the non-zero integer being checked.
            lastNonZeroIndex++; //increment the lastNonZeroIndex location one to the right.
        }
    }

    for (let i = lastNonZeroIndex; i < nums.length; i++) { //iterate through array from the lastNonZeroIndex location, which will be a zero,
        nums[i] = 0; //and set all remaining elements to 0.
    }

    return nums; //return nums.
};

//solved dec solution, two pointer
//t:O(n) s:O(1)
var moveZeroes = function(nums) { //create a function that returns a modified array with all zeros at the end of array.
    let left = 0; //initialize left pointer as first index position.
    let right = nums.length - 1; //initialize right pointer as last index position.

    while (left < right) { //while the left and right pointers are converging,
        if (nums[left] === 0) { //if the num is 0,
            let [zero] = nums.splice(left, 1); //initialize a deconstructed integer as the splice of the integer from nums, removes the 0 from nums.
            nums.push(zero); //push the zero to the end of nums.
            right--; //move the right pointer to the left one position, as the position it previously occupied is held by the 0 we pushed in.
        } else { //if the num is not 0,
            left++; //move the left pointer to the right one position, we leave non-zero integers as is.
        }
    }

    return nums; //return nums array.
}

console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]

console.log(moveZeroes([0])); //[0]

console.log(moveZeroes([0,0,1])); //[1,0,0]

console.log(moveZeroes([0,0,0,0,0,0,1,1,1])); //[1,1,1,0,0,0,0,0,0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 
// Follow up: Could you minimize the total number of operations done?