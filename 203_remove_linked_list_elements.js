// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//solved dec solution, linked list, two pointer
//t: O(n) s: O(1)
var removeElements = function(head, val) { //create function that returns the head of a linked list without node values matching variable val.
    let dummy = new ListNode(-Infinity, head); //initialize dummy node pointing to the head.
    let current = head; //initialize current pointer at the head.
    let previous = dummy; //initilaize previous pointer at the dummy node.

    while(current) { //while the current pointer is not null,
        if(current.val !== val) { //if the current node's value is not equal to val,
            previous = current; //move the previous pointer to the current node.
        } else { //but is the current node's value is equal to val,
            previous.next = current.next; //we break the link and point the previous node to the current node's next node.
        }

        current = current.next; //move the current pointer to the next node to check in the next iteration of the while loop.
    }

    return dummy.next; //return the head of the new linked list.
};

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
 
// Constraints:
// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50