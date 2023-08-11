// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
//Tutorial solution SOLVED
var isValid = function(s) { //Create a function that determines if input string is valid (has matching sets of open and closing parentheses in valid order).
    const stack = []; //Declare a stack array.
    const parentheses = '()[]{}'; //Declare a parentheses string that holds the expected characters.
    let i = 0; //Declare an index variable.

    while (i < s.length) { //Iterate through array,
        stack.push(s[i]); //Push the parenthesis you're looking at to stack array.
        i++; //Increment the index location for next check.

        let open = stack[stack.length - 2]; //Declare this check's open parenthesis to be the second-last parenthesis in a stack.
        let closed = stack[stack.length - 1]; //Declare this check's closed parenthesis to be the last parenthesis in a stack.
        let potentialParentheses = open + closed; //Declare this check's parentheses set to be the open and closed parentheses.

        if (parentheses.includes(potentialParentheses)) { //If the parentheses string includes this check's potentialParentheses set,
            stack.pop(); //Pop the set out of the stack.
            stack.pop();
        }
    }

    return stack.length === 0; //If the stack has no parentheses, then all parentheses are part of a matching set. Return true.
};

console.log(isValid('()')); //true
console.log(isValid('()[]{}')); //true
console.log(isValid('(]')); //false
console.log(isValid('(])')); //false
console.log(isValid('([)]')); //false
console.log(isValid('{[]}')); //true
console.log(isValid('([{}])')); //true