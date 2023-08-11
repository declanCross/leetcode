// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
//Tutorial solution SOLVED
var majorityElement = function(nums) { //Find the number that appears the majority of times, more than (n / 2) times.
    const hashTable = {}; //Declare an object to keep track of how many times a number appears.

    for (let i = 0; i < nums.length; i++) { //Iterate through nums array,
        hashTable[nums[i]] = hashTable[nums[i]] + 1 || 1; //Set the key in the hashTable to be the number in nums that we are looking at, and set the value to be the current value for that key in hashTable (starts at 0) plus 1.
    }

    for (const key in hashTable) { //Iterate through the keys in hashTable,
        if (hashTable[key] > Math.floor(nums.length / 2)) { //If the key value in the hashTable is greater than n / 2,
            return key; //return the majority number key.
        }
    }
};

console.log(majorityElement([3,2,3])); //3

console.log(majorityElement([2,2,1,1,1,2,2])); //2