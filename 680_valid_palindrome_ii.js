// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */
//solved tutorial solution, two pointers
//t:O(n) s:O(1)
var validPalindrome = function(s) { //create a function that returns true if the string is a palindrome, or can be one by removing at most 1 character.
    let left = 0; //initialize left pointer at beginning of string.
    let right = s.length - 1; //initialize right pointer at end of string.

    while (left < right) { //iterate through string with two pointers while left pointer is to the left of right pointer,
        if (s[left] !== s[right]) { //if the two pointers are checking different characters,
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1); //run the helper function to check if either of the inside characters of the characters being checked are the same character. If at least one of the two inside characters are matching the originally checked characters, then we can remove one of those characters and we can potentially have a valid palindrome.
        }
        left++; //increment left pointer to the right.
        right--; //decrement right pointer to the left.
    }
    
    return true; //return true if we have iterated through s, we have a valid palindrome, or one that can be a palindrome by removing at most 1 character.
};

function isPalindrome(s, left, right) { //helper function to check for a valid palindrome,
    while (left < right) { //iterate through s while left pointer is to the left of right pointer,
        if (s[left] !== s[right]) return false; //if the checked characters at left and right are different, return false, this is not a palindromic pairing.

        left++; //otherwise, we have a valid palindromic pairing, increment left pointer.
        right--; //and decrement right pointer.
    }

    return true; //return true if we have iterated through s, we have a valid palindrome.
}

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.