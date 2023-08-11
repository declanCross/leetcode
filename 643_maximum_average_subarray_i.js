// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//solved tutorial solution, sliding window
//t:O(n) s:O(1)
var findMaxAverage = function(nums, k) { //create a function that returns the maximum average value from a continguous subarray of length k.
    let max = -Infinity; //initialize starting max variable as -Inifinity, to update with coming maxes.
    let soFar = 0; //initialize soFar variable to count the sum so far.
    let windowStart = 0; //initialize window start pointer to index 0.

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) { //iterate through array nums with sliding window with windowEnd initialized as end of window pointer,
        soFar += nums[windowEnd]; //update soFar sum to include the value at windowEnd pointer.

        if (windowEnd - windowStart === k - 1) { //when a valid window of length k is reached,
            let average = soFar / k; //initialize the current average to be the current sum divided by the k value.
            max = Math.max(max, average); //update max to be the Math.max value between previous max, and the average of current window.
            soFar -= nums[windowStart]; //update soFar sum to subtract the windowStart value, as the window will slide to the right with the next iteration of for loop,
            windowStart++; //and increment the windowStart pointer to the next value in array nums.
        }
    }

    return max; //return the maximum average value from a contiguous subbarray of length k.
};

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104