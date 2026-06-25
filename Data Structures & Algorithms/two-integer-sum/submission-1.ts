class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result = new Map<number,number>();

        for (let i=0; i< nums.length;i++) {
            const firstNum = nums[i];
            const theAdder = target - firstNum;
            
            if (result.has(theAdder)) {
               return [result.get(theAdder)!,i];
            }
            result.set(firstNum,i)
            // console.log(result)
        }
        return []
    }
}
