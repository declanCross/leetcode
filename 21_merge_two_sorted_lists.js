// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//Tutorial solution SOLVED linked list using dummy node. If solving a problem involving adding or removing nodes, use a dummy node pointing to the head of the linked list.
var mergeTwoLists = function(list1, list2) { //Create function that returns a linked list containing the acending ordered nodes from two ascending ordered linked lists.
    const dummy = new ListNode(-Infinity); //Create a dummy node that points to any value, the dummy.next will be used to store the head of the returned linked list.
    let previous = dummy; //Declare a previous pointer that is initially pointing to the dummy node.

    while (list1 && list2) { //While list1 and list2 are valid, pointing to a valid number, not pointing to null,
        if (list1.val <= list2.val) { //If the value at list1 pointer is less than or equal to the value at list2 pointer,
            previous.next = list1; //Break the existing link and create new link with previous pointing to the list1 value,
            previous = list1; //Move the previous pointer to the list1 pointer position,
            list1 = list1.next; //and set list1 pointer to the next linked node at list1.next.
        } else { //Otherwise, if the value at list1 pointer is greater than the value at list2 pointer,
            previous.next = list2; //Break the existing link and create new link with previous pointing to the list2 value,
            previous = list2; //Move the previous pointer to the list2 pointer position,
            list2 = list2.next; //and set the list2 pointer to the next linked node at list2.next.
        }
    }

    if (!list1) previous.next = list2; //If list1 points to null first, then create the next link with previous pointing to the rest of list2.
    if (!list2) previous.next = list1; //If list2 points to null first, then create the next link with previous pointing to the rest of list1.

    return dummy.next; //return the head of the linked list, the next node that dummy node points to at dummy.next.
};

console.log(mergeTwoLists([1,2,4], [1,3,4])); // [1,1,2,3,4,4]

console.log(mergeTwoLists([], [])); //[]

console.log(mergeTwoLists([], [0])); //[0]