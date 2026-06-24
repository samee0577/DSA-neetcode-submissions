class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        function isDIfferent(arr1:number[],arr2:number[]){
            if (arr1.length!==arr2.length) return true

            const sorted1=[...arr1].sort((a, b) => a - b)
            const sorted2=[...arr2].sort((a, b) => a - b)
            const res = sorted1.every((num,index)=>sorted2[index]===num)
            return !res 
        }
        const uniqueNum = new Set(nums)

        const nums2 = [...uniqueNum]
        return isDIfferent(nums,nums2)
    }
}
