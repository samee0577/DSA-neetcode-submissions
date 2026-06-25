class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result = [0, 0];

        for (let num in nums) {
            const firstNum = nums[num];

            const theAdder = target - firstNum;
            const indexOfsSecond = nums.indexOf(theAdder);
            if (indexOfsSecond !== -1) {
                // console.log(typeof(Number(num)))
                result[0] = Number(num);
                result[1] = indexOfsSecond;
            }
        }

        return result;
    }
}
