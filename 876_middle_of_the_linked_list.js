// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//solved dec solution, floyd's algorithm using fast and slow pointers.
//t:O(n) s:O(1)
var middleNode = function (head) {
	//create a function that returns the middle node of a linked list.
	let fast = head; //initialize fast pointer at head node.
	let slow = head; //initialize slow pointer at head node.

	while (fast && fast.next) {
		//while the fast pointer is pointing to a valid node, a node other than the last node or a null node,
		fast = fast.next.next; //move the fast pointer ahead two nodes,
		slow = slow.next; //move the slow pointer ahead one node.
	}

	return slow; //when fast node has traversed linked list, return slow node, the middle of the linked list.
};

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
