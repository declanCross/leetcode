// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number[]}

//tutorial solution, iteratively, with stack and results array.
// t: O(n) s: O(n)
var preorderTraversal = function(root) { //create function that returns the preorder traversal of a binary tree.
    if(!root) return []; //edge case, if root is null, return empty array.

    const stack = [root]; //initialize the stack as the root of the tree.
    const result = []; //initialize the result array as an empty array.

    while(stack.length) { //while there are nodes left in the stack,
        let node = stack.pop(); //initialize the node we're checking to be the last node in the stack.

        result.push(node.val); //push the node value to the result array.

        if(node.right) stack.push(node.right); //if there is a child node to the right, push the right child node to the stack.
        if(node.left) stack.push(node.left); //if there is a child node to the left, push the left child node to the stack.
    }

    return result; //after finishing checking each node, return the result array consisting of the preorder traversal of the binary tree.
};

//resursive solution, helper function
// var preorderTraversal = function(root) {
//     if(!root) return [];

//     const result = [];

//     const preorder = (node) => {
//         if(!node) return null;

//         result.push(node.val);
//         if(node.left) preorder(node.left);
//         if(node.right) preorder(node.right);
//     }

//     preorder(root);

//     return result;
// };

console.log(preorderTraversal([1,null,2,3])); //[1,2,3]

console.log(preorderTraversal([])); //[]

console.log(preorderTraversal([1])); //[1]
 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?