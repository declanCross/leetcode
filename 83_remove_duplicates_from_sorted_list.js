// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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
//tutorial solution solved
var deleteDuplicates = function(head) { //create function that deletes duplicate nodes from a sorted linked list.
    let dummy = new ListNode(-Infinity, head); //initiate dummy new ListNode as -Infinity, with a .next pointing to the head of the linked list.
    let current = head; //initiate current pointer at the head of the linked list.
    let previous = dummy; //initiate previous pointer at the dummy node.

    while (current) { //while the current pointed to node is truthy,
        if (current.val === previous.val) { //if the current nodes value is the same as the previous nodes value,
            while (current && current.val === previous.val) { //while the current node is truthy and the current and previous nodes' values are the same,
                current = current.next; //move the current pointer to current.next. This skips the same values and moves the pointer to check the next node's value.
            }

            previous.next = current; //Once the current and previous nodes' values are different, set the previous node to link to the current node.
        } else {
            previous = current; //If the current and previous nodes' values are different, move the previous pointer to the current node,
            current = current.next; //and move the current pointer to the next node.
        }
    }

    return dummy.next; //return the head of the newly composed linked list.
};

console.log(deleteDuplicates([1,1,2])); //[1,2]

console.log(deleteDuplicates([1,1,2,3,3])); //[1,2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].

// -100 <= Node.val <= 100

// The list is guaranteed to be sorted in ascending order.