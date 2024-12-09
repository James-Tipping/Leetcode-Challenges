class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];    
    }

    push(val: number): void {
        if(this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
        this.stack.push(val);
    }

    pop(): void {
        const poppedNumber = this.stack.pop();
        if (poppedNumber === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}