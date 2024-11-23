function lengthOfLastWord(s: string): number {
    const trimmedText = s.trim();
    const strings = trimmedText.split(' ');
    return strings[strings.length - 1].length
};