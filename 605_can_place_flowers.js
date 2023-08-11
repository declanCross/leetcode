// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//solved tutorial solution
//t:O(n) s:O(1)
var canPlaceFlowers = function(flowerbed, n) { //create a function that returns whether there are n open flower plots.
    let i = 0; //initialize index location pointer.

    while (i < flowerbed.length && n !== 0) { //iterate through array as long as n has value, there are flowers to plant,
        if (flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) { //if the plot has space and the plot before and after do not have plants,
            n--; //decrement n, a flower can be planted here.
            i++; //increment i, we can skip the next plot to give this flower space.
        }
        i++; //increment i to check the next plot.
    }

    return n === 0; //return is n === 0. true if there are enough valid plots, false otherwise.
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)); //true
// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

console.log(canPlaceFlowers([1,0,0,0,1], 2)); //false
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)); //true

console.log(canPlaceFlowers([0,0,1,0,1], 1)); //true

console.log(canPlaceFlowers([0], 1)); //true

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length