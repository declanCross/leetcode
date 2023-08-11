// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//Dec solution SOLVED
var getRow = function(rowIndex) {
    if (rowIndex < 0) return [];
    
    const pTriangle = [[1]];

    for (i = 1; i <= rowIndex; i++) {
        let previousRow = pTriangle[i - 1];
        let currentRow = [];

        currentRow.push(1);

        for (j = 1; j < previousRow.length; j++) {
            currentRow[j] = previousRow[j] + previousRow[j - 1];
        }

        currentRow.push(1);

        pTriangle.push(currentRow);
    }

    return pTriangle[rowIndex];
};

//test cases
console.log(getRow(3)); //[1,3,3,1]
console.log(getRow(0)); //[1]
console.log(getRow(1)); //[1,1]