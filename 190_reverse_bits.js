// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// tutorial solution, bit manipulation, 1. find the least significant bit, 2. left shift the least significant bit, 3. update the result, 4. shift right to remove least significant bit.
//t: O(1) s: O(1)
var reverseBits = function(n) { //create function that returns the reverse bits of a given 32 bits unsigned integer, n.
    let result = 0; //initialize result to 0.

    for(let i = 0; i < 32; i++) { //iterate through 32 bit integer,
        let lastBit = n & 1; //get the last bit using and operator.

        let revBit = lastBit << (31 - i); //reverse that bit, store it in variable revBit, use left shift with (31 - i) to reverse it in the correct order.

        result = result | revBit; //update the result using or operator.

        n = n >>> 1; //remove that least significant bit, so shift right.

    }

    return result >>> 0; //convert the result to an unsigned 32 bit integer, using shift right.

};

// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
 
// Constraints:
// The input must be a binary string of length 32
 
// Follow up: If this function is called many times, how would you optimize it?