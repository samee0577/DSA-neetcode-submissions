class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (const word of strs) {
            const key = word.split('').sort().join('');
            if (map.has(key)) {
                map.get(key).push(word);
            } else {
                map.set(key, [word]);
            }
        }

        return [...map.values()];
    }
}