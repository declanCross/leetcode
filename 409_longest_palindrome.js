// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
/**
 * @param {string} s
 * @return {number}
 */
//solved dec solution
//t:O(2n) s:O(n)
const longestPalindrome = (s) => {
	//create function that returns length of longest possible palindrome from string s.
	let map = {}; //initialize map object.
	let evenCharCount = 0; //initialize evenCharCount to store the number of even chars, and the number of non-largest odd chars - 1, to become a viable even char.
	let highestOddCharCount = 0; //initialize highestOddCharCount to store the largest odd character count.

	for (char of s) {
		//iterate through the chars of s,
		if (!map[char]) {
			//if there is no key of char in map,
			map[char] = 1; //initialize a key:value pair char: 1, for the first occurence of that char.
		} else {
			//else, there is already a key of char in map,
			map[char]++; //increment the char's value for the next occurence of that char.
		}
	}

	for (char in map) {
		//iterate through the chars in map,
		if (map[char] % 2 === 0) {
			//if char's value is even,
			evenCharCount += map[char]; //add the value to the evenCharCount.
		} else {
			//else, the char's value is odd,
			if (map[char] > highestOddCharCount) {
				//if the char's value is greater than the highestOddCharCount,
				if (highestOddCharCount > 0) evenCharCount += highestOddCharCount - 1; //if the highestOddCharCount is greater than 0, add 1 less than the highestOddCharCount to evenCharCount, this accounts for situations where there are no evenCharCounts, where evenCharCount would otherwise be a negative number.
				highestOddCharCount = map[char]; //assign highestOddCharCount to the char's value.
			} else {
				//else, the char's value is less than the highestOddCharCount,
				evenCharCount += map[char] - 1; //assign 1 less than the char's value to evenCharCount.
			}
		}
	}

	return evenCharCount + highestOddCharCount; //return both counts.
};

console.log(longestPalindrome("abccccdd")); //7
// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

console.log(longestPalindrome("a")); //1
// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

console.log(longestPalindrome("aabbbbcccddddd")); //13 "abbdddddbba"
console.log(longestPalindrome("aaAAbbBBcccddddD")); //15 "aAbBddcccddBbAa"
console.log(
	longestPalindrome(
		"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
	)
); //983
// Constraints:
// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.
