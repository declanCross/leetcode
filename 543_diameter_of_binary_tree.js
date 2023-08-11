// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//solved tutorial solutiuon, recursive, depth-first search
//t:O(n) s:O(n)
var diameterOfBinaryTree = function(root) { //create a function that returns the longest path within a binary tree.
    if (!root) return 0; //edge case, if null root, return 0.

    let max = 0; //initialize global max variable to 0.

    const dfs = node => { //helper function, depth first search.
        if (!node) return 0; //if checked node is null, return 0.

        let left = dfs(node.left); //initialize left variable to be the recursive call of the child left node from current checked node.
        let right = dfs(node.right); //initialize right variable to be the recursive call of the child right node from current checked node.

        max = Math.max(left + right, max); //assign global max as the higher number between the left side and right side of tree, and the current max value.

        return Math.max(left, right) + 1; //return the higher number between the left and right sides, plus 1.
    }

    dfs(root); //initial call of depth-first search function with the root node.

    return max; //return the global max, which is the longest path within the tree.
};

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100