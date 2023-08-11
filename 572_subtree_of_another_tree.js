// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//solved tutorial solution, double recursive functions
//t:O(m*n) s:O(m+n)
var isSubtree = function (root, subRoot) {
	//create function that returns true if tree contains subtree.
	function isSame(root1, root2) {
		//create helper recursive function, checks if the tree and subtree nodes are the same.
		if (!root1 && !root2) return true; //if both nodes are null, meaning you've gone through the nodes in both trees and they are the same at the end (null) return true.
		if (!root1 || !root2 || root1.val !== root2.val) return false; //if only one node is null, or the values are different, the trees are different, return false.
		return isSame(root1.left, root2.left) && isSame(root1.right, root2.right); //if the node values match, call itself again on both trees' left and right nodes.
	}

	function dfs(node) {
		//create helper recursive function, checks each node in root tree and calls our other helper function isSame to check for sameness.
		if (!node) return false; //if node is null, return false, you've reached the end of the tree without finding the matching subtree.
		if (isSame(node, subRoot)) {
			//if the isSame helper function returns true, it has found the matching subtree,
			return true; //return true.
		}
		return dfs(node.left) || dfs(node.right); //if the isSame helper function returned false, call itself (dfs function) again to compare the next left and right nodes.
	}
	return dfs(root); //initial call to the dfs function.
};

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104
