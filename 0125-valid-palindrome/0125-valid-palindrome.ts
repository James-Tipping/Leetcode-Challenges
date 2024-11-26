function isPalindrome(s: string): boolean {
    let myString = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    // console.log(myString);
    let i = 0;
    let j = myString.length - 1;

    while (i < j) {
        if (myString[i] !== myString[j]) {
            // console.log('false');
            return false;
        }
        i++;
        j--;
    }
    // console.log('true')
    return true;
};