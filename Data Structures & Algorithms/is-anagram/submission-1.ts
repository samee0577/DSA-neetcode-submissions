class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const freq = new Map();
        for (let letter of s) {
            freq.set(letter, (freq.get(letter) || 0) + 1);
        }
        for (let letter of t) {
            if (freq.get(letter) === undefined) return false;
            freq.set(letter, freq.get(letter) - 1);
        }
        if ([...freq.values()].every((num) => num === 0)) return true;
        else {
            return false;
        }
    }
}
