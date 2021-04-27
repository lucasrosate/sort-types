/** Class that represents a stack in js. */
class Stack {
    #elements;

    /**
     * Creates a empty stack.
     */
    constructor() {
        this.#elements = []
        this.top = 0;
    }

    /**
     * It inserts a new element on the top of the stack.
     * @param {number} elem 
     */
    push(elem) {
        this.#elements.push(elem);
        this.top += 1;
    }

    /**
     * It removes the element on the the top of the stack.
     * @returns {number}
     */
    pop() {
        this.top -= 1;
        return this.#elements.pop();
    }

    /**
     * Test if the stack is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.#elements.length ? false : true;
    }
}




module.exports = Stack;