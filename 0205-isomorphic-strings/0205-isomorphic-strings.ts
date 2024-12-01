function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST: { [key: string]: string } = {};
    const mapTS: { [key: string]: string } = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapST[charS] && mapST[charS] !== charT) {
            return false;
        }

        if (mapTS[charT] && mapTS[charT] !== charS) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
}