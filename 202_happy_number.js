// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
/**
 * @param {number} n
 * @return {boolean}
 */
//Tutorial solution SOLVED
const getNumSum = num => { //Function to get the squared number sum of each part of provided number.
    let sum = 0; //Declare initial sum.

    while (num !== 0) { //While there are numbers left to square,
        let lastDigit = num % 10; //Get last digit, we will square this number at the end of each loop.
        num = Math.floor(num / 10); //Get all numbers except last digit and update the num variable to be these remaining numbers.
        sum += Math.pow(lastDigit, 2); //Add the square of the last digit to the sum.
    }

    return sum; //Return the sum of squared number parts.
}

var isHappy = function(n) { //Function that moves two pointers around, one fast one slow, and checks for when they eventually meet.
    let fast = n; //Declare a fast pointer to argument integer n.
    let slow = n; //Declare a fast pointer to argument integer n.

    while (true) { //Continue this loop until entering the if loop, which will return true or false and end the loop cycle.
        fast = getNumSum(getNumSum(fast)); //Move the fast pointer ahead two spots by running the getNumSum function twice.
        slow = getNumSum(slow); //Move the slow pointer ahead one spot by running the getNumSum function once.

        if (fast === slow) { //Once the loop results in both pointers pointing to same sum number, we have a cycle confirmed.
            return fast === 1; //If the pointers are pointing to 1, return true. If they're pointing to any other number than 1, return false.
        }
    }
};

console.log(isHappy(19)); //true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1 CYCLE NODE

console.log(isHappy(2)); //false
// 2**2 = 4
// 4**2 = 16
// 1**2 + 6**2 = 37
// 3**2 + 7**2 = 58
// 5**2 + 8**2 = 89
// 8**2 + 9**2 = 145
// 1**2 + 4**2 + 5**2 = 42
// 4**2 + 2**2 = 20
// 2**2 + 0**2 = 4 CYCLE NODE
