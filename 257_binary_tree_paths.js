// Given the root of a binary tree, return all root-to-leaf paths in any order.

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
 * @return {string[]}
 */
//solved tutorial solution, depth-first search, recursive, backtracking
//t:O(n) s:O(n)
var binaryTreePaths = function(root) { //create a function that returns every valid root to leaf path in a binary tree.
    if (!root) return []; //edge case, if tree is empty, return empty array.

    let result = []; //initialize result as empty array.

    function dfs(root, path) { //create a recursive function to update the path, check for leaf nodes, update result array, and traverse tree.
        path.push(root.val); //push the root node being checked to the path array.

        if (!root.left && !root.right) { //if the current root node is a leaf,
            result.push(path.join("->")); //push the path array, converted to a string with elements joined by "->", to the result array.
        }

        if (root.left) dfs(root.left, path); //if there is a child node to the left of current root node, call recursive function on that child node, w current path.
        if (root.right) dfs(root.right, path); //if there is a child node to the right of current root node, call recursive function on that child node, w current path.

        path.pop(); //once a leaf node is reached, and the result array is updated with the path to the leaf node, pop out the most recent node, and backtrack up the tree.
    }

    dfs(root, []); //call the recursive function for the first time.

    return result; //return result array of valid root to leaf paths in the binary tree.
};

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]
 
// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100