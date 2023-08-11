// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */
//solved tutorial solution, recursion, divide and conquer
// t: O(n) s: O(n)
var isSymmetric = function(root) { //create function that returns whether a binary tree is symmetrical.
    function recurse(l, r) { //create recursive function to check left and right sides of tree.
        if (!l && !r) return true; //if left and right nodes are null, they are symmetrical, return true.
        if ((!l || !r) || (l.val !== r.val)) return false; //if only one of the left or right nodes is null, or if they are different values, they are not symmetrical, return false.

        return recurse(l.left, r.right) && recurse(l.right, r.left); //return the truthness of the recursive function being called twice, checking the left side's left node with the right side's right node, and checking the left side's right node with the right side's left node.
    }

    return recurse(root.left, root.right); //return the recursive function's first call, checking the left and right side of the tree from root node.
};

console.log(isSymmetric([1,2,2,3,4,4,3])); //true

console.log(isSymmetric([1,2,2,null,3,null,3])); //false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?