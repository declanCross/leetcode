/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//Tutorial solution SOLVED
var getIntersectionNode = function(headA, headB) { //Find the intersection node between two arrays
    if (headA === null || headB === null) { //If either array is empty, return null.
        return null;
    }

    let pointer1 = headA; //Declare pointer1 to begin iterating through headA array.
    let pointer2 = headB; //Declare pointer2 to begin iterating through headB array.

    while (pointer1 !== pointer2) { //While the two pointers are not pointing to the same value at their respective nodes,
        pointer1 = pointer1.next; //Iterate the pointer1 by one.
        pointer2 = pointer2.next; //Iterate the pointer2 by one.

        if (pointer1 === pointer2) { //If both pointers are pointing to the same value at their respective nodes,
            return pointer1; //return the value of pointer1.
        } //NOTE this can be the intersection node if there is one OR the value null if there are no intersection nodes.

        if (pointer1 === null) { //If pointer1 reaches the end of headA array and points to the next value, null,
            pointer1 = headB; //Reassign pointer1 to iterate through the headB array.
        }

        if (pointer2 === null) { //If pointer2 reaches the end of headB array and points to the next value, null,
            pointer2 = headA; //Reassign pointer2 to iterate through the headA array.
        }
    }

    return pointer1; //If the intersection point is the first node of each array, return the value at that node.
};

console.log(getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5]));
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

console.log(getIntersectionNode([1,9,1,2,4], [3,2,4]));
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

console.log(getIntersectionNode([2,6,4], [1,5]));
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.