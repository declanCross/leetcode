//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//Video Tutorial solution SOLVED
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
    if (left > right) {
        return null;
    }

    let mid = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, left, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, right);

    return root;
};

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
console.log(sortedArrayToBST([-10,-3,0,5,9]));

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
console.log(sortedArrayToBST([1,3]));