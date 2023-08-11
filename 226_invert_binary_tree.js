// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
//solved tutorial solution, recursive function, use javascript array reassignment with recursive calls.
//t:O(n) s:O(1)
var invertTree = function(root) { //create a function that inverts binary tree and returns the root.
    if (root) { //if there is a valid binary tree,
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; //reassign the left and right sides below the checked node, and recursively call the inversion function on each side.
    }

    return root; //return root.
};

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []
 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100