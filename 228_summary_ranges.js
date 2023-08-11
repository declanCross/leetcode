// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
//Dec solution SOLVED sliding window
var summaryRanges = function(nums) { //Create a function that returns a range of all consecutive numbers abbreviated to a range of "a->b" and all other numbers as "a".
    const ranges = []; //Declare our array of ranges.
    let start = null; //Declare a range start variable to null, as we don't initially know when the range will start.

    for (let end = 0; end < nums.length; end++) { //Iterate through array, declaring the end variable to be the index location we are checking.
        if (nums[end + 1] === nums[end] + 1) { //If the next number is a consecutive number, we have a range,
            if (start === null) start = end; //If start is null, then this is the beginning of the range, so initialize start to the current index,
            continue; //continue iteration, checking the next index location.
        } else if (start === null) { //If the next number is not consecutive, and if start is null, we have a number without a range,
            ranges.push(`${nums[end]}`); //Push the current number to the ranges array.
        } else { //If the next number is not consecutive, but start has been initialized, then we have reached the end of a range,
            ranges.push(`${nums[start]}->${nums[end]}`); //Push the value of the starting index and the value of the ending index to the ranges array,
            start = null; //and assign start to null, since we are checking for a new range with the next iteration.
        }
    }

    return ranges; //Return ranges array.
};

console.log(summaryRanges([0,1,2,4,5,7])); //["0->2","4->5","7"]

console.log(summaryRanges([0,2,3,4,6,8,9])); //["0","2->4","6","8->9"]