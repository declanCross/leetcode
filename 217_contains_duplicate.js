// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Dec solution SOLVED
// var containsDuplicate = function(nums) { //Create function that checks if an array contains duplicates of any integer value.
//     tracker = []; //Declare tracker array to store integer values the first time they appear.

//     for (let i = nums.length-1; i >= 0; i--) { //Iterate through nums array backwards.
//         if (!tracker.includes(nums[i])) { //If tracker array does not include the current integer value,
//             tracker.push(nums.pop()); //Pop the value from nums array and push the value to tracker array.
//         } else { //If tracker array already has the current integer value,
//             return true; //return true, this array contains duplicates of at least one integer value.
//         }
//     }

//     return false; //If iterated through array, return false, this array does not contain duplicates of any integer value.
// };

//Optimal solution 
var containsDuplicate = function(nums) {
    let set = new Set(nums);

    return set.size !== nums.length;
};

console.log(containsDuplicate([1,2,3,1])); //true
console.log(containsDuplicate([1,2,3,4])); //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); //true