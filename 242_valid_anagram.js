// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Tutorial solution SOLVED hash table / frequency map
var isAnagram = function(s, t) { //Create a function that determines if two strings are anagrams.
    if (s.length !== t.length) return false; //If the two strings are of different lengths, they are not anagrams, return false.

    let map = {}; //Declare a map variable as an object to hold key:value pairs of letter:numberOfLetterInWord.

    for (let i = 0; i < s.length; i++) { //Iterate through string s,
        let letter = s[i]; //Declare current letter as variable letter.

        if (!map[letter]) { //If the map does not have the letter key,
            map[letter] = 1; //Create a letter key set to current letter with a value of 1.
        } else { //Otherwise, the map already has that letter key,
            map[letter]++; //Increment the value of the letter key by 1.
        }
    };

    for (let i = 0; i < t.length; i++) { //Iterate through string t,
        let letter = t[i]; //Declare current letter as variable letter.

        if (map[letter] === undefined || map[letter] < 1) return false; //If the value of the current letter is undefined or less than 1, than the string t contains different letters than string s, they are not anagrams, return false.
        
        map[letter]--; //Otherwise, there is a positive value at the current letter key, so decrement the value and continue the iteration to check the next letter.
    };

    return true; //If we've made it through the iteration completely, then we are left with an object that has had each letter key value reduced to 0, meaning string t is an anagram match of string s, return true.
};

console.log(isAnagram('anagram', 'nagaram')); //true

console.log(isAnagram('rat', 'car')); //false

console.log(isAnagram('banana', 'apple')); //false

console.log(isAnagram('aacc', 'ccac')); //false