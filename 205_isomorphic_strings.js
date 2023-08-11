// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Dec solution SOLVED
// var isIsomorphic = function(s, t) {
//     let lettersUsedS = [];
//     let lettersUsedT = [];

//     if (s.length !== t.length) return false;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === s[i+1] || t[i] === t[i+1]) {
//             if (s[i] === s[i+1] && t[i] === t[i+1]) {
//                 if (lettersUsedS.includes(s[i]) || lettersUsedT.includes(t[i])) {
//                     lettersUsedS.push(s[i]);
//                     lettersUsedS.push(s[i+1]);
//                     lettersUsedT.push(lettersUsedT[lettersUsedS.indexOf(s[i])]);
//                     lettersUsedT.push(lettersUsedT[lettersUsedS.indexOf(s[i+1])]);
//                     i++;
//                     continue;
//                 }

//                 lettersUsedS.push(s[i]);
//                 lettersUsedS.push(s[i+1]);
//                 lettersUsedT.push(t[i]);
//                 lettersUsedT.push(t[i+1]);
//                 i++;
//                 continue;
//             } else {
//                 return false;
//             }
//         }

//         if (s[i] !== s[i+1] && t[i] !== t[i+1]) {
//             if (lettersUsedS.includes(s[i]) || lettersUsedT.includes(t[i])) {
//                 lettersUsedS.push(s[i]);
//                 lettersUsedT.push(lettersUsedT[lettersUsedS.indexOf(s[i])]);
//             } else {
//                 lettersUsedS.push(s[i]);
//                 lettersUsedT.push(t[i]);
//             }
//         }
//     }

//     return lettersUsedT.join('') === t;
// };

//Optimal solution SOLVED
var isIsomorphic = function(s, t) { //Create function that checks for if the letters of two strings can be assigned to each other to create the matching string.
    for(let i = 0; i < s.length; i++){ //Iterate through each letter in string,
        if(s.indexOf(s[i]) != t.indexOf(t[i])){ //If the first index of the letter you're checking is not equal to the first index of the other string's equivalent letter,
            return false //return false.
        }
    }
    return true //If iteration made it through the string, then these are isomorphic strings, return true.
};

console.log(isIsomorphic('aaeaa', 'uuxyy')); //false
console.log(isIsomorphic('badc', 'baba')); //false
console.log(isIsomorphic('egg', 'add')); //true
console.log(isIsomorphic('foo', 'bar')); //false
console.log(isIsomorphic('paper', 'title')); //true
console.log(isIsomorphic('paper', 'lager')); //false
console.log(isIsomorphic('poopoo', 'doodoo')); //true