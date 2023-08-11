// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

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
 * @param {number} targetSum
 * @return {boolean}
 */
//solved tutorial solution, recursion, depth-first search helper function
//t: O(n) s: O(n)
var hasPathSum = function(root, targetSum) { //create function that returns true if a root-to-leaf path exists that sums to targetSum.
    if (!root) return false; //edge case, if root is null, return false.

    let hasPath = false; //initialize hasPath variable to false. If a valid path exists, re-assign value to true.

    const dfs = (node, sum) => { //create depth-first search helper function to check sum to node, and check left and right nodes, and reassign sum.
        if (node.left === null && node.right === null) { //if left and right child nodes are null, this node is a leaf node,
            if (sum === node.val) { //so check if the sum is equal to the current leaf node,
                hasPath = true; //in which case, this is a valid path, so reassign hasPath to true.
            }

            return; //return out of dfs function, this is a leaf node.
        }

        if (node.left) { //if left child node exists,
            dfs(node.left, sum - node.val); //recursively call dfs function with left child node, and update sum to subtract the current parent node.
        }

        if (node.right) { //if right child node exists,
            dfs(node.right, sum - node.val); //recursively call dfs function with right child node, and update sum to subtract the current parent node.
        }
    }

    dfs(root, targetSum); //first call of recursive dfs function, passing in root node and targetSum.
    return hasPath; //return hasPath boolean, value will be true if any valid path exists.
};

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000