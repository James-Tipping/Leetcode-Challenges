function wordPattern(pattern: string, s: string): boolean {
    const charWordMap= new Map<string, string>();
    const wordCharMap= new Map<string, string>();

    const words = s.split(' ');

    if (words.length !== pattern.length) return false;

    for (let i = 0; i<pattern.length; i++) {
        const word = words[i];
        const char = pattern[i];

        if (charWordMap.get(char) && charWordMap.get(char) !== word) {
            return false;
        }

        if (wordCharMap.get(word) && wordCharMap.get(word) !== char) {
            return false;
        }

        charWordMap.set(char, word);
        wordCharMap.set(word, char);
    }

    return true;
    
};