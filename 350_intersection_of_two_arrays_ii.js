// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//solved dec solution
//t:O(n*m) s:O(n)
//work on mapping, this solution uses three pointer, but mapping is faster.
function intersect(nums1, nums2) {
	//create function that returns the minimum intersection array, the min number of times a number shows up between two arrays.
	let nums1ElementCount; //initialize nums1 element count.
	let nums2ElementCount; //initialize nums2 element count.
	let left; //initialize left pointer for nums2.
	let right; //initialize right pointer for nums2.
	let nums1pointer; //initialize pointer for nums1.
	let elementShows; //initialize counter for minimum number of times an element shows between two arrays.
	let results = []; //initialize results array.

	for (let i = 0; i < nums2.length; i++) {
		//for each element in nums2,
		if (!results.includes(nums2[i])) {
			//if the element is not already included in results array,
			left = i; //assign left pointer to i.
			right = left + 1; //assign right pointer to one element right of left.
			nums1pointer = 0; //assign nums1 pointer to beginning of nums1 array.

			//check count for one nums2 element
			nums2ElementCount = 1; //assign nums2 element count to 1, as we're checking nums 2 array there will always be a valid value here.
			while (right < nums2.length) {
				//iterate through nums2 array,
				if (nums2[left] === nums2[right]) {
					//if there is another number within array matching the checked number at left pointer,
					nums2ElementCount++; //increment nums2 element count, there is another instance of this number within nums 2 array.
				}
				right++; //increment right pointer to check next number.
			}

			//check count for matching nums1 element
			nums1ElementCount = 0; //assign nums 1 element count to 0, there won't always be a matching example of the nums2[left] number being checked for.
			while (nums1pointer < nums1.length) {
				//iterate through nums1 array,
				if (nums2[left] === nums1[nums1pointer]) {
					//if there is a matching number to nums2[left] within nums1 array,
					nums1ElementCount++; //increment nums1 element count, there is an instance of this matching number within nums1 array.
				}
				nums1pointer++; //increment nums1 pointer to check next number.
			}

			//check for lowest number of times that element shows up between both arrays
			elementShows = Math.min(nums1ElementCount, nums2ElementCount); //assign elementShows to the min number of times a checked number appears between both arrays.
			while (elementShows > 0) {
				//while element shows is above 0,
				results.push(nums2[left]); //push the checked number from nums2[left] to the results array.
				elementShows--; //decrement elementShows, this will allow us to push the number the appropriate number of times to results array.
			}
		}
	}
	return results; //return results array.
}

console.log(intersect([1, 2, 2, 1], [2, 2])); //[2,2]
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); //[9,4]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

console.log(
	intersect([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1], [1, 1, 2, 1, 3, 4])
); //[1,1,1,2,3,4]

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
