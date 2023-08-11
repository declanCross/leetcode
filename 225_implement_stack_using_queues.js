// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:
// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

//solved tutorial solution, return when more knowledgable about stacks.
//t:O(n) s:O(1)
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class MyQueue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	enqueue(val) {
		const newNode = new Node(val);
		if (!this.size) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}
	dequeue() {
		if (!this.size) return null;
		let node = this.head;
		this.head = this.head.next;
		node.next = null;
		this.size--;
		return node.val;
	}
	peek() {
		return this.head.val;
	}
	empty() {
		return this.size === 0;
	}
}

class MyStack {
	constructor() {
		this.queue = new MyQueue();
	}
	push(val) {
		let rotate = this.queue.size;
		this.queue.enqueue(val);
		while (rotate) {
			this.queue.enqueue(this.queue.dequeue());
			rotate--;
		}
	}
	pop() {
		return this.queue.dequeue();
	}
	top() {
		return this.queue.peek();
	}
	empty() {
		return this.queue.empty();
	}
}

// Example 1:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

// Constraints:
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.

// Follow-up: Can you implement the stack using only one queue?
