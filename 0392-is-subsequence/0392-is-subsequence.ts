function isSubsequence(s: string, t: string): boolean {
    let sI = 0;
    // let tI = 0;

    for (let tI = 0; tI < t.length; tI ++) {
        if (s[sI] === t[tI]) {
            sI++;
        }
    }
    return sI === s.length;
};