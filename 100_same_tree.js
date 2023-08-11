// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//solved tutorial solution recursive with base case and recurrence relation
//t: O(p+q) s: O(1)
var isSameTree = function(p, q) { //create function that returns whether two binary trees are the same or not.
    //base cases, they pop us out of the recursive callstack, otherwise we'll be in an infinite loop.
    if (p === null && q === null) return true; //if both trees are the same, return true.
    if (p === null || q === null) return false; //if one of the trees is different, return false.

    if (p.val === q.val) { //if the node values of both trees are the same, carry out the recurrence relation,
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); //return true if both left and right sides are the same, and false if they aren't.
    }

    return false; //otherwise, if p.val !== q.val, return false.
};

console.log(isSameTree([1,2,3], [1,2,3])); //true

console.log(isSameTree([1,2], [1,null,2])); //false

console.log(isSameTree([1,2,1], [1,1,2])); //false