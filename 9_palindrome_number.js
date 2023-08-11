// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
//Tutorial solution  two pointer
var isPalindrome = function(x) {
    if (x < 0) return false;

    x = x.toString();

    left = 0;
    right = x.length - 1;

    while (left < right) {
        if (x[left] !== x[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome(121)); //true

console.log(isPalindrome(-121)); //false

console.log(isPalindrome(10)); //false