// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//solved dec solution, good speed, needs memory optimizing
// const canConstruct = (ransomNote, magazine) => {
// 	let ransomNoteArray = ransomNote.split("");
// 	let magazineArray = magazine.split("");
// 	let noteIndex = 0;
// 	while (ransomNoteArray.length > 0) {
// 		if (!magazineArray.includes(ransomNoteArray[noteIndex])) return false;
// 		for (let i = 0; i < magazineArray.length; i++) {
// 			if (magazineArray[i] === ransomNoteArray[noteIndex]) {
// 				magazineArray.splice(i, 1);
// 				ransomNoteArray.splice(noteIndex, 1);
// 				break;
// 			}
// 		}
// 	}
// 	return ransomNoteArray.length === 0;
// };

//solved sample solution, good memory optimization due to use of map object, optimal.
var canConstruct = function (ransomNote, magazine) {
	//create function that returns true if each letter in ransomNote is found in magazine.
	const available = {}; //initialize available object map.
	for (const c of magazine) {
		//iterate through each character in magazine,
		if (c in available) available[c]++;
		//if the available object contains the letter key, increment the value of that letter key.
		else available[c] = 1; //else, the available object doesn't have the letter key, make the letter key and assign it a value of 1.
	}

	for (const c of ransomNote) {
		//iterate through each character in ransomNote,
		if (!(c in available) || available[c] === 0)
			return false; //if the character is not found in available object, or the character is found but the value is 0, return false.
		else available[c]--; //else, the character is found and has value > 0 in available object, decrement the value.
	}

	return true; //return true, each letter has been found in magazine.
};

console.log(canConstruct("a", "b")); //false
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

console.log(canConstruct("aa", "ab")); //false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

console.log(canConstruct("aa", "aab")); //true
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

console.log(canConstruct("hello", "helix")); //false
console.log(canConstruct("hello", "hopeloplopo")); //true
console.log(canConstruct("hello", "ollehabc")); //true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
