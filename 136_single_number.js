// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
//Dec solution SOLVED
var singleNumber = function(nums) { //Create function that returns unique number from array of duplicates with one unique number
    sortNums = nums.sort((a, b) => a - b); //Sort the list in ascending order

    let j; //Declare the index variable for the unique number

    for (let i = 0; i < sortNums.length; i++) { //For each element in the sorted array
        if (sortNums[i] === sortNums[i + 1]) { //If the num you're looking at is the same as the num after it,
            i++; //then increment the counter by 1, so that you look at the next different number for comparison
        } else { //otherwise,
            j = i; //the current num is unique, so assign the index location of that num to j
            break; //and exit the for loop
        }
    }

    return sortNums[j]; //Return the number that appears only once
};

console.log(singleNumber([2,2,1])); //1

console.log(singleNumber([4,1,2,1,2])); //4

console.log(singleNumber([1])); //1