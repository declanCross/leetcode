// We have two special characters:

// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
/**
 * @param {number[]} bits
 * @return {boolean}
 */
//solved
//t:O(n) s:O(1)
//define function that returns true if the last character must be a one-bit character, or false otherwise.
// const isOneBitCharacter = (bits) => {
// 	//iterate through array bits, skipping bits that start with 1, since the next character must be part of that two-bit character.
// 	let i = 0;
// 	while (i < bits.length - 1) {
// 		i += bits[i] + 1;
// 	}
// 	//once iterated through bits, i value will either be equal to the last index location if the last character is a one-bit character (true), or equal to one more than the last index location if the last character is part of a two-bit character (false).
// 	return i === bits.length - 1;
// };

//solved, optimal
//t:O(n) s:O(1)
//define function that returns true if the last character must be a one-bit character, or false otherwise.
const isOneBitCharacter = (bits) => {
	//check for the first zero bit before all trailing one bits at end of array.
	let i = bits.length - 2;
	while (i >= 0 && bits[i] > 0) {
		i--;
	}
	//now we have the first zero bit index location, if the number of bits from the index to the end of the array is even, then all prior bits can be paired into two-bit characters (10 or 11), so the last character must be a one-bit character (0), return true. If it's odd, then there's an extra bit that is not paired, so the last character is not a one-bit character, return false.
	return (bits.length - i) % 2 === 0;
};

console.log(isOneBitCharacter([1, 0, 0])); //true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.

console.log(isOneBitCharacter([1, 1, 1, 0])); //false
// Explanation: The only way to decode it is two-bit character and two-bit character.
// So the last character is not one-bit character.

console.log(isOneBitCharacter([1, 1, 0, 1, 0])); //false

console.log(isOneBitCharacter([0])); //true

console.log(isOneBitCharacter([1, 1, 0])); //true

console.log(isOneBitCharacter([1, 0])); //false

console.log(isOneBitCharacter([1, 0, 1, 0])); //false

console.log(isOneBitCharacter([0, 0, 0, 1, 1, 0])); //true

// Constraints:
// 1 <= bits.length <= 1000
// bits[i] is either 0 or 1.
