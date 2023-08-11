// AI Solution SOLVED
// function twoSum(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

const nums = [3,3];
const target = 6;

// Dec Solution SOLVED
function twoSum(nums, target) {
    let answer = [];
    for (const num of nums) {
        for (let i = nums.indexOf(num) + 1; i < nums.length; i++) {
            if (((target - num) === nums[i]) && answer.length < 1) {
                answer.push(nums.indexOf(num), i);
            }
        }
    }
    return answer;
}

console.log(twoSum(nums, target));