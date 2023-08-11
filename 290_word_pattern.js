// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
//Dec solution SOLVED
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    map = {};

    if (s.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i];
        let word = s[i];

        if (!map[letter] && !Object.values(map).includes(word)) {
            map[letter] = word;
        } else if (map[letter] !== word) {
                return false;
            }
        }

    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); //true

console.log(wordPattern('abba', 'dog cat cat fish')); //false

console.log(wordPattern('aaaa', 'dog cat cat dog')); //false

console.log(wordPattern('abba', 'dog dog dog dog')); //false

console.log(wordPattern('aaa', 'aa aa aa aa')); //false