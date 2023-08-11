// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//solved dec solution
//t:O(n) s:O(n)
var rotateString = function(s, goal) { //create function that returns true if s can become goal after some number of shifts of the first letter of s to the end of s.
    let counter = 0; //intialize counter for iterating through s.

    while (counter < s.length) { //iterate through s while each letter has only been shifted at most once,
        s = shiftS(s); //assign s to the returned shifted string from the helper function.

        if (s === goal) return true; //if the shifted string is equivalent to goal string, return true.

        counter++; //otherwise, increment counter.
    }

    return false; //if you iterate through s, then return false.
};

const shiftS = s => { //helper function to shift first character of s to the end and returned modified string.
    let arrayS = s.split(''); //initialize arrayS to be an array of each letter in s.
    arrayS.push(arrayS.splice(0,1)); //push the spliced first letter of arrayS to the end of arrayS.
    s = arrayS.join(''); //assign s to be the joined shifted string by using .join('') method on arrayS.
    
    return s; //return the shifted string.
};

//solved tutorial solution
//t:O(n) s:O(n)
const rotateString = (s, goal) => { //create function that returns true if s can become goal after some number of shifts of the first letter of s to the end of s.
    s = s + s; //initialize s to be the sum of itself, this way the complete shifted library is present in one string.

    return s.includes(goal); //return the truthyness of s.includes(goal).
};

console.log(rotateString('abcde', 'cdeab')); //true
// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

console.log(rotateString("abcde","abced")); //false
// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

// Constraints:
// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.