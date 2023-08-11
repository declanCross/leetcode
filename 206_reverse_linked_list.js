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
//Tutorial solution SOLVED
var reverseList = function(head) { //Create function that reverses the pointers from a linked-list, returning the head of the newly-directed linked-list.
    let current = head; //Declare the current pointer to start at the head, beginning of the linked-list.
    let previous = null; //Declare the previous pointer to start at the previous location of the linked-list, initially null.
    let next; //Declare a next pointer, which will be moved immediately upon iteration.

    while (current !== null) { //Iterate through linked-list as long as the current pointer is valid.
        next = current.next; //Assign the next pointer to the current.next value from original linked-list, to the right of current.
        current.next = previous; //Break link to next value from current to current.next by assigning current.next link to the previous value, to the left of current.
        previous = current; //Assign the previous pointer to the location of the current pointer, which will be to it's right.
        current = next; //Assign the current pointer to the location of the next pointer, which will be to it's right.
    }

    return previous; //Return the head of the newly-linked-list, which has a head location that corresponds to the previous pointer after iteration.
};

console.log(reverseList([1,2,3,4,5])); //[5,4,3,2,1]
console.log(reverseList([1,2])); //[2,1]
console.log(reverseList([])); //[]
