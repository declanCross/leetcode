// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
//solved tutorial solution, recursion using a stack.
// t: O(n) s: O(n)
var maxDepth = function(root) { //create function that returns the maximum depth of tree.
    if (root === null) return 0; //base case, if root is null, return 0.

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); //if there is a value at a node, recursively call maxDepth on the left and right side of the child nodes, and return 1 if there is value at a child node. This recursive call continuously checks each child node that has a value.
};

//solved tutorial solution, breadth first search using a queue.
// t: O(n) s: O(n)
const maxDepth = (root) => { //create function that returns the maximum depth of tree.
    if (!root) return 0; //base case, if root is null, return 0.

    let depth = 0; //initialize depth and assign value of 0 to begin with. This is the depth of a null tree.
    let queue = [root]; //initialize queue to draw from and assign value of array root.

    while(queue.length) { //while there are nodes in the queue,
        let len = queue.length; //reference the length of the queue as variable len.

        for(let i = 0; i < len; i++) { //iterate through the queue, consisting of the breadth of one depth level of the tree.
            let current = queue.shift(); //remove/shift the first node from the queue and assign it to variable current.

            if(current.left) queue.push(current.left); //if there is a child node to the left, push that node into queue.
            if(current.right) queue.push(current.right); //if there is a child node to the right, push that node into queue.
        }

        depth++; //after checking each level, iterate depth by 1.
    }

    return depth; //after checking each node in the queue, return depth of tree.
};

console.log(maxDepth([3,9,20,null,null,15,7])); //3

console.log(maxDepth([1,null,2])); //2