// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//Tutorial solution SOLVED
var containsNearbyDuplicate = function(nums, k) { //Create function that returns true if two identical integers are within k index locations from each other.
    const map = new Map(); //Declare a map to store num:index elements from array nums.

    for (let i = 0; i < nums.length; i++) { //Iterate through array nums.
        if (map.has(nums[i])) { //If the current integer from array nums is a key found in the map,
            const j = map.get(nums[i]); //Assign j to the map value (index location) of the current nums[i] key already found in maps.
            console.log(map);
            if (Math.abs(j - i) <= k) { //Then check if the difference between the index locations of the two identical integers is within k index locations.
                return true; //return true, there are two identical integers within k index locations from each other.
            }
        }
        
        map.set(nums[i], i); //If the map doesn't have the current integer, set the current integer to the index location being checked.
                             //If the two identical integers' index locations were further than k index locations apart, set the integer key in map to the index value of the index location being checked to move the reference to the most recent identical integer so that we can check for proximity to the potential next identical integer if there is one.
    }

    return false; //If we make it through the array without detecting close enough duplicate integers, return false.
};

console.log(containsNearbyDuplicate([1,2,3,1], 3)); //true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); //true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); //false