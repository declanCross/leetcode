// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
//solved dec solution
//t:O(n) s:O(n)
const firstUniqChar = (s) => {
	let map = {};
	let uniqueChar = "";
	for (let i = 0; i < s.length; i++) {
		if (!map[s[i]]) {
			map[s[i]] = 1;
		} else {
			map[s[i]]++;
		}
	}
	for (let char in map) {
		if (map[char] === 1) {
			uniqueChar = char;
			break;
		}
	}
	if (!uniqueChar) return -1;
	return s.indexOf(uniqueChar);
};

console.log(firstUniqChar("leetcode")); //0
// Example 1:
// Input: s = "leetcode"
// Output: 0

console.log(firstUniqChar("loveleetcode")); //2
// Example 2:
// Input: s = "loveleetcode"
// Output: 2

console.log(firstUniqChar("aabb")); //-1
// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.
