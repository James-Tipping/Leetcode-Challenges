function evalRPN(tokens: string[]): number {
    const stack: string[] = [];

    for (const element of tokens) {
        if (!isOperator(element)) {
            stack.push(element);
        } else {
            if (stack.length >= 2) {
            const secondNumber = parseInt(stack.pop()!);
            const firstNumber = parseInt(stack.pop()!);

            const result = performOperation(firstNumber, secondNumber, element);
            stack.push(result);
            }
        }
    }
    return parseInt(stack[0]);
};

function isOperator(token: string): boolean {
    const operators = ['-', '+', '*', '/'];
    if (operators.includes(token)) return true;
    return false;
}

function performOperation(firstNumber: number, secondNumber: number, operator: string): string {

    switch (operator) {
        case '+':
            return (firstNumber + secondNumber).toString();
        case '-':
            return (firstNumber - secondNumber).toString();
        case '/':
            return (firstNumber / secondNumber).toString();
        case '*':
            return (firstNumber * secondNumber).toString();
        default:
            throw new Error('no operator');
    }
}