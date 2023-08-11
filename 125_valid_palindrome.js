// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
//solved dec solution
var isPalindrome = function(s) {
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz0987654321';
    let validS = '';

    s = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if(validCharacters.indexOf(s[i]) !== -1) {
            validS += s[i];
        }
    }

    let left = 0;
    let right = validS.length - 1;

    while(left < right) {
        if (validS[left] !== validS[right]) return false;

        left++;
        right--;
    }

    return true;
};

//solved tutorial solution
//t: O(n+n) s: O(n)
// function isPalindrome(s) {

//     let cleanStr = cleanUp(s);
//     return isPal(cleanStr);
// };

// function cleanUp(str) {
//     let char = 'abcdefghijklmnopqrstuvwxyz0987654321';
//     let newS = '';

//     for (let i = 0; i < str.length; i++) {
//         let lCase = str[i].toLowerCase();

//         if (char.indexOf(lCase) !== -1) {
//             newS += lCase;
//         }
//     }

//     return newS;
// };

// function isPal(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) return false;

//         left++;
//         right--;
//     }

//     return true;
// }

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

console.log(isPalindrome("race a car")); //false
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

console.log(isPalindrome(" ")); //true
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

console.log(isPalindrome("0P")); //false

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.