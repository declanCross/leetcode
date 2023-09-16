// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
/**
 * @param {number[]} nums
 * @return {number}
 */
//solved
//t:O(n) s:O(n)
//create function that returns the length of the smallest possible subarray that has the same degree as nums.
// const findShortestSubArray = (nums) => {
// 	//map out num:degree object.
// 	let map = {};
// 	for (let num of nums) {
// 		!map[num] ? (map[num] = 1) : map[num]++;
// 	}
// 	//get highest degree(s) and push to degree array.
// 	let highestDegreeNums = [];
// 	let highestDegree = -Infinity;
// 	for (let num in map) {
// 		if (map[num] > highestDegree) {
// 			highestDegree = map[num];
// 			highestDegreeNums = [parseInt(num)];
// 			continue;
// 		}
// 		if (map[num] === highestDegree) highestDegreeNums.push(parseInt(num));
// 	}
// 	//for each highest degree num, use two pointer to get the portion of array containing the first and last occurences of num, and save the smallest portion to the smallest subarray length variable.
// 	let ssaLength = Infinity;
// 	for (let num of highestDegreeNums) {
// 		let left = 0;
// 		let right = nums.length - 1;
// 		while (nums[left] !== num || nums[right] !== num) {
// 			if (nums[left] !== num) left++;
// 			if (nums[right] !== num) right--;
// 		}
// 		let portionLength = right - left + 1;
// 		ssaLength = Math.min(ssaLength, portionLength);
// 	}
// 	//return length of smallest possible subarray that has the same degree of nums.
// 	return ssaLength;
// };

//ai solution, optimal
//t:O(n) s:O(n)
//define function that takes array of nums as input.
const findShortestSubArray = (nums) => {
	//initialize map object to store count of each number, first object to store first occurrences of each number, degree to store degree of array, result to store the length of the shortest subarray.
	let map = {},
		first = {},
		degree = 0,
		result = Infinity;
	//iterate over nums array.
	for (let i = 0; i < nums.length; i++) {
		//if this is the first occurrence of the current num, store its index.
		if (first[nums[i]] === undefined) first[nums[i]] = i;
		//increment the count of the current number.
		map[nums[i]] = (map[nums[i]] || 0) + 1;
		//if the count of the current num is equal to the degree,
		if (map[nums[i]] === degree) {
			//update result to be the minimum length of a subarray with this degree.
			result = Math.min(result, i - first[nums[i]] + 1);
			//else if the count of the current number is greater than the degree,
		} else if (map[nums[i]] > degree) {
			//update degree and result.
			degree = map[nums[i]];
			result = i - first[nums[i]] + 1;
		}
	}
	//return the length of the shortest subarray with the same degree as nums.
	return result;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); //2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); //6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

// Constraints:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.
