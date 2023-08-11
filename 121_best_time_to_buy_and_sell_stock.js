// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * @param {number[]} prices
 * @return {number}
 */
//Tutorial solution SOLVED
var maxProfit = function(prices) { //Find the optimal profit given an array of prices of a stock on different days
    let sellIndex = prices.length - 1; //Start the sell index at the end of array
    let optimalProfit = 0; //Declare initial profit

    for (let buyIndex = prices.length - 1; buyIndex >= 0; buyIndex--) { //Starting at the end of array, moving the buy index to the left with each iteration,
        let buyValue = prices[buyIndex]; //Set the buy value to the current value you're looking at, at the buy index
        let sellValue = prices[sellIndex]; //Set the sell value to wherever the sell index was set to from a previous iteration. Starts at the right of array

        if (buyValue - sellValue >= 0) { //If the buy value is greater than the sell value
            sellIndex = buyIndex; //Then set the sell index to the location of the buy index, to the left
        } else { //Otherwise, if the buy value is less than the sell value
            let thisProfit = sellValue - buyValue; //Then set this profit to the profit of those two values, the positive difference between buy and sell price
            optimalProfit = Math.max(optimalProfit, thisProfit); //Set optimal profit to the highest value between this profit, and whatever value optimal profit was previously assigned
        }
    }

    return optimalProfit; //Return optimal profit
};

//Checking for if there is only one value in array prices
console.log(maxProfit([5])); //0

//Simple working example
console.log(maxProfit([7,1,5,3,6,4])); //5

//Checking if there are no values after lowestPrice[i]
console.log(maxProfit([7,6,4,3,1])); //0

//Checking additional testcase
console.log(maxProfit([1,2])); //1

//Checking if there is a profit available with a higher lowestPrice when the lowestPrice is at end of array
console.log(maxProfit([2,4,1])); //2

//Checking additional testcase
console.log(maxProfit([3,4,5,2,6,1])); //4

//Checking additional testcase
console.log(maxProfit([3,2,6,5,0,3])); //4

//bitburner testcase
console.log(maxProfit([188,100,148,78,60,30,95,87,195,38,108,92,113,78,197,132,127,150,59,9,24,145,128,124,64,107,93,67,110,69,135,134,188,62,29,161,18,91,89,12,177,10,184])); //179