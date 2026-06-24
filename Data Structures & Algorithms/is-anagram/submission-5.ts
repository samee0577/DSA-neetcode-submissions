class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const freq = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        for (let letter of s) {
            const index = letter.charCodeAt(0) - aCode;
            freq[index]++;
        }

        for (let letter of t) {
            const index = letter.charCodeAt(0) - aCode;
            freq[index]--;
        }

        return freq.every((count) => count === 0);
    }
}