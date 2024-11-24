function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 1) return strs[0];
    if (strs.length === 0) return "";

    strs.sort();

    let firstString = strs[0];
    let lastString = strs[strs.length - 1];

    let i = 0;

    while (i < firstString.length && i < lastString.length && firstString[i] === lastString[i]) {
        i++;
    }

    // console.log(i);

    return firstString.slice(0, i);
};