// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.
/**
 * @param {number[]} score
 * @return {string[]}
 */
//solved dec solution
//t:O(nlogn) s:O(n)
//create function that returns the ranking designations of each player's score.
const findRelativeRanks = (score) => {
	//initialize variables.
	let output = [];
	let rankings = {};
	let sortedScore = [...score].sort((a, b) => a - b);
	let rank = 4;
	let scoreValue;
	//assign the first three ranking designations for the three highest scores from the sorted array of scores, removing these scores from the array.
	rankings[sortedScore.pop()] = "Gold Medal";
	rankings[sortedScore.pop()] = "Silver Medal";
	rankings[sortedScore.pop()] = "Bronze Medal";
	//iterate through sortedScore array backwards, this starts with the 4th place finisher and moves down the list.
	for (let i = sortedScore.length - 1; i >= 0; i--) {
		//assign each remaining score to the rankings array with their ranking designation being the place they finished.
		rank = rank.toString();
		scoreValue = sortedScore[i];
		rankings[scoreValue] = rank;
		rank = parseInt(rank);
		rank++;
	}
	//iterate through original score array.
	for (let scoreValue of score) {
		//push their ranking, the value of their key:value position within ranking, to the output array.
		scoreString = scoreValue.toString();
		let ranking = rankings[scoreString];
		output.push(ranking);
	}
	//return output of ranking designations of each player's score.
	return output;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])); //["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

console.log(findRelativeRanks([10, 3, 8, 9, 4])); //["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// Constraints:
// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// All the values in score are unique.
