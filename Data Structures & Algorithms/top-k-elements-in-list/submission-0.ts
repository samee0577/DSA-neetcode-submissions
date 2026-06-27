class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq =new Map()
        for (let num of nums){
            freq.set(num,(freq.get(num)||0)+1);
        }
        const array =[...freq].sort((a,b)=>b[1]-a[1]).slice(0,k)
        return array.map((n)=>n[0])
    }
}
