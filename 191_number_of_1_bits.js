// Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//tutorial solution, bit manipulation, iterating a count and shifting right
var hammingWeight = function(n) { //create function that returns the hamming weight, the number of 1 bits in an unsigned integer.
    let count = 0; //intialize counter.

    while(n !== 0) { //while there are bits left to check in the n argument,
        let isOne = n & 1; //initialize isOne variable to represent the result of checking if the current bit is a 1 using the & operator with a 1.
        if (isOne === 1) count++; //if the current bit is a 1, increment the counter.

        n = n >>> 1; // shift right.
    }

    return count; //return the number of 1 bits in the provided unsigned integer, n.
};

// console.log(hammingWeight(00000000000000000000000000001011));
// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 
// Constraints:
// The input must be a binary string of length 32.
 
// Follow up: If this function is called many times, how would you optimize it?