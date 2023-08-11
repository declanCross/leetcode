// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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
//solved tutorial solution, breadth-first search, queue, first-in-first-out
// t: O(n) s: O(n)
var minDepth = function(root) { //create function that returns minimum depth of binary tree, returns the number of nodes to the first leaf node.
    if(root === null) return 0; //base case, if the tree is empty, return 0.

    let minDepth = 1; //if there is a value at root, start the minDepth counter at 1.

    let queue = [root]; //initialize the queue with the root node of tree.

    //breadth-first-search
    while(queue.length) { //while there are nodes left to check in the queue,
        let levelSize = queue.length; //initialize levelSize to be the number of nodes left in the queue.
        while(levelSize){ //while there is a number of levelSize,
            let current = queue.shift(); //initialize the current node to be the first node in the queue, by shifting it out into the current variable.

            if(current.left === null && current.right === null) { //if the current node has no children, then it is a leaf node,
                return minDepth; //return the first leaf node encountered.
            } else { //otherwise, the current node has at least one child,
                if(current.left) queue.push(current.left); //if there is a child is to the left, push the child node to the queue.
                if(current.right) queue.push(current.right); //if there is a child is to the right, push the child node to the queue.
            }

            levelSize--; //decrement levelSize, so that we can exit the nested while loop when we're done checking this level.
        }

        minDepth++; //increment minDepth when we exit the nested while loop, as there is a valid node in the next level.
    }

    return minDepth; //return minDepth when we have checked all nodes and reached the final valid node, which will be the first leaf node since one was not encountered earlier.
};

console.log(minDepth([3,9,20,null,null,15,7])); //2

console.log(minDepth([2,null,3,null,4,null,5,null,6])); //5

// Constraints:
// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000