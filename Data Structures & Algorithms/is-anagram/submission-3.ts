class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const freq = []
        for (let letter of s) {
            freq[letter] = (freq[letter]||0)+1 
        }
        for(let letter of t){
            if(freq[letter] ===undefined) return false
            freq[letter] = (freq[letter])-1 
        }
        const res = Object.values(freq).every((val)=>val<=0)
        return res
    }
}
