// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//solved dec solution
//t:O(n*m) s:O(n)
// function intersection(nums1, nums2) {
// 	let results = [];
// 	let left = 0;
// 	let right = 0;
// 	while (right < nums2.length) {
// 		while (left < nums1.length) {
// 			if (nums1[left] === nums2[right]) {
// 				if (!results.includes(nums1[left])) {
// 					results.push(nums1[left]);
// 				}
// 				left = 0;
// 				right++;
// 			} else {
// 				left++;
// 			}
// 		}
// 		left = 0;
// 		right++;
// 	}
// 	return results;
// }

//solved dec solution optimal
//t:O(n*m) s:O(n)
function intersection(nums1, nums2) {
	let results = [];
	for (let i = 0; i < nums2.length; i++) {
		if (nums1.includes(nums2[i]) && !results.includes(nums2[i])) {
			results.push(nums2[i]);
		}
	}
	return results;
}

console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[9,4]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
