function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; 
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const current = romanMap[s[i]];
        const next = i < n - 1 ? romanMap[s[i + 1]] : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}