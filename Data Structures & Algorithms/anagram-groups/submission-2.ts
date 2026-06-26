class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];
        const seen = new Set<number>(); // tracks indices already grouped

        function isAnagram(s: string, t: string): boolean {
            if (s.length !== t.length) return false;

            const freq = new Array(26).fill(0);
            const aCode = "a".charCodeAt(0);

            for (let letter of s) {
                const index = letter.charCodeAt(0) - aCode;
                freq[index]++;
            }

            for (let letter of t) {
                const index = letter.charCodeAt(0) - aCode;
                freq[index]--;
            }

            return freq.every((value) => value === 0);
        }

        for (let i = 0; i < strs.length; i++) {
            if (seen.has(i)) continue; // already placed in a group, skip

            const tempArray = [strs[i]];
            seen.add(i);

            for (let j = i + 1; j < strs.length; j++) {
                if (seen.has(j)) continue;

                if (isAnagram(strs[i], strs[j])) {
                    tempArray.push(strs[j]);
                    seen.add(j);
                }
            }

            result.push(tempArray);
        }

        return result;
    }
}