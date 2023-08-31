// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// A more efficient approach would be to calculate the total seconds poisoned without iterating over each second of the duration. Instead, you could iterate over the timeSeries and calculate the difference between consecutive times. If the difference is less than or equal to the duration, then you can add the difference to the total seconds poisoned. Otherwise, you can add the duration to the total seconds poisoned. This would result in a time complexity of O(n), which would be much faster for large inputs. Here's an example of how this could be implemented:
//solved ai solution
//t:O(n) s:O(1)
//create function that returns the total number of seconds poisoned over a given time series with a given poison duration.
const findPoisonedDuration = (timeSeries, duration) => {
	//initialize secondsPoisoned variable.
	let secondsPoisoned = 0;
	//iterate through timeSeries array,
	for (let i = 0; i < timeSeries.length - 1; i++) {
		//initialize difference variable being the difference between the current time and the next time.
		let diff = timeSeries[i + 1] - timeSeries[i];
		//if the difference is less than the duration, the poison effect overlaps and the timer resets, meaning the difference between the two times is the time poisoned from this time to the next time.
		if (diff <= duration) {
			secondsPoisoned += diff;
			//else, if the difference is greater than the duration, the poison duration is realized, and the duration is the time poisoned from this time to the next time.
		} else {
			secondsPoisoned += duration;
		}
	}
	//initialize the totalSecondsPoisoned as the addition of the duration to secondsPoisoned to account for the last time being poisoned.
	const totalSecondsPoisoned = secondsPoisoned + duration;
	//return the total seconds poisoned.
	return totalSecondsPoisoned;
};

console.log(findPoisonedDuration([1, 4], 2)); //4
// Example 1:
// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

console.log(findPoisonedDuration([1, 2], 2)); //3
// Example 2:
// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

console.log(findPoisonedDuration([1, 3, 3], 2)); //4
console.log(findPoisonedDuration([1, 4, 7], 2)); //6

// Constraints:
// 1 <= timeSeries.length <= 104
// 0 <= timeSeries[i], duration <= 107
// timeSeries is sorted in non-decreasing order.
