// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
//solved dec solution, two pointer
//t:O(n) s:O(1)
// var removeDuplicates = function (s) {
// 	let left = 0;
// 	let right = 1;

// 	while (right < s.length) {
// 		if (s[left] === s[right]) {
// 			s = s.slice(0, left) + s.slice(right + 1);
// 			left--;
// 			right--;
// 		} else {
// 			left++;
// 			right++;
// 		}
// 	}

// 	return s;
// };

//solved tutorial solution, stack, optimal
//t:O(n) s:O(n)
function removeDuplicates(s) {
	//create function that returns string without adjacent duplicate characters,
	let stack = []; //initialize stack to hold checked characters.

	for (let char of s) {
		//iterate through char of s,
		stack[stack.length - 1] === char ? stack.pop() : stack.push(char); //if current char is equal to last char in stack, pop it out of stack, else push char to stack.
	}

	return stack.join(""); //return the valid string.
}

console.log(removeDuplicates("abbaca")); //ca
// Example 1:
// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

console.log(removeDuplicates("azxxzy")); //ay
// Example 2:
// Input: s = "azxxzy"
// Output: "ay"

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.
