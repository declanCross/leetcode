// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
/**
 * @param {string[]} words
 * @return {string[]}
 */
//solved dec solution
//t:O(n) s:O(1)
//create function that returns the words that can be typed on one keyboard row.
const findWords = (words) => {
	//initialize results array, and keyboard rows.
	let results = [];
	const row1 = "qwertyuiopQWERTYUIOP";
	const row2 = "asdfghjklASDFGHJKL";
	const row3 = "zxcvbnmZXCVBNM";
	//iterate through words array,
	for (let word of words) {
		//initialize the current row that the word could be typed on, to be based on the first character.
		let currentRow;
		//if the row includes the first character of the word, assign the word to be checked against that row.
		if (row1.includes(word[0])) currentRow = row1;
		if (row2.includes(word[0])) currentRow = row2;
		if (row3.includes(word[0])) currentRow = row3;
		//iterate through characters in word,
		for (let i = 0; i < word.length; i++) {
			//if the character is not included in the current assigned row, break out of loop.
			if (!currentRow.includes(word[i])) break;
			//if the character is the last character in the word, and it has already passed the .includes() check, push the word to the results array.
			if (i === word.length - 1) results.push(word);
		}
	}
	//return results array.
	return results;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); //["Alaska","Dad"]
// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

console.log(findWords(["omk"])); //[]
// Example 2:
// Input: words = ["omk"]
// Output: []

console.log(findWords(["adsdf", "sfd"])); //["adsdf","sfd"]
// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

// Constraints:
// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).
