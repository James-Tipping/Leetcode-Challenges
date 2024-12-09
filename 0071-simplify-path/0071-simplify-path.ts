function simplifyPath(path: string): string {

    const stack: string[] = [];
    const constituents = path.split('/');

    for (const constituent of constituents) {
        if (constituent === '' || constituent === '.') {
            continue;
        } else if (constituent === '..') {
            if (stack.length > 0) {
            stack.pop();
            }
        } else {
            stack.push(constituent);
        }
    }
    return '/' + stack.join('/');
}