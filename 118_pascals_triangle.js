// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
//Tutorial solution SOLVED
var generate = function(numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];

    const pascalsTriangle = [[1]];

    for (i = 1; i < numRows; i++) {
        let previousRow = pascalsTriangle[i - 1];
        const currentRow = [];

        currentRow.push(1);

        for (j = 1; j < previousRow.length; j++) {
            currentRow[j] = previousRow[j] + previousRow[j - 1];
        }

        currentRow.push(1);

        pascalsTriangle.push(currentRow);
    }

    return pascalsTriangle;
};

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(5));

// Example 2:
// Input: numRows = 1
// Output: [[1]]
console.log(generate(1));