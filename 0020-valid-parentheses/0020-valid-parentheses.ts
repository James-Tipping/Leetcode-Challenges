function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketsMap = new Map<string, string>([
        ['}', '{'],
        [')', '('],
        [']', '[']
    ]);

    for (const char of s) {
        if (bracketsMap.has(char)) {
            if (stack.pop() !== bracketsMap.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;

};