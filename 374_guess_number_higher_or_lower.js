// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//solved dec solution, binary search
//t:O(logn) s:O(1)
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    const findMid = (num1, num2) => {
        return Math.floor((num1 + num2) / 2);
    };

    let mid = findMid(left, right);
    
    while (guess(mid) !== 0) {
        if (guess(mid) === -1) right = mid - 1;
        if (guess(mid) === 1) left = mid + 1;

        mid = findMid(left, right);
    }

    return mid;
};

const guess = (num) => {
    const pick = 6;

    if (num > pick) return -1;
    if (num < pick) return 1;
    if (num === pick) return 0;
};

console.log(guessNumber(10)); //pick = 6, returns 6
// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1
 
// Constraints:
// 1 <= n <= 231 - 1
// 1 <= pick <= n