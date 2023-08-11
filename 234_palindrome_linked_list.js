// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//solved tutorial solution, linked list, helper function reverse linked list, floyd's algorithm fast and slow two pointers.
//t:O(2n) => O(n) s:O(1)
const reverse = head => { //helper function to reverse linked list.
    let current = head; //initialize current pointer to head node of linked list.
    let previous = null; //initialize previous pointer to null.
    let next; //initialize next pointer.

    while(current) { //while the current pointer is pointing to a valid node,
        next = current.next; //move the next pointer to current.next,
        current.next = previous; //break the link and make new link from current node to previous node,
        previous = current; //move previous pointer to current node,
        current = next; //move current pointer to the next node.
    }

    return previous; //return previous, which is the head of the reversed linked list.
};

var isPalindrome = function(head) { //create function that checks whether a linked list is a palindrome.
    let fast = head; //initialize fast pointer to head,
    let slow = head; //initialize slow pointer to head,
    let startPointer = head; //initialize startPointer to head,
    let length = 0; //initialize length to 0.

    while (fast && fast.next) { //while fast pointer node and the next node from fast pointer node are valid,
        fast = fast.next.next; //move fast pointer to it's next next node,
        slow = slow.next; //move slow pointer to it's next node,
        length++; //increment length counter.
    }

    let rightHalf = reverse(slow); //initialize right half of linked list to be the head of the reversed list using helper function.

    while (length) { //while the length counter is valid,
        length--; //decrement the length counter,
        
        if (rightHalf.val !== startPointer.val) return false; //if the node checked from the right half of linked list doesn't match the node checked from the left half of linked list, return false, this linked list is not a palindrome.

        rightHalf = rightHalf.next; //move the right half pointer to the next node to the left,
        startPointer = startPointer.next; //move the left half pointer to the next node to the right.
    }

    return true; //if you made it through the linked list checks, this link list is a palindrome, return true.
};

// console.log(isPalindrome([1,2,2,1])); //true

// console.log(isPalindrome([1,2])); //false
 
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 
// Follow up: Could you do it in O(n) time and O(1) space?