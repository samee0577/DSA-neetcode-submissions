class Solution {
    hasDuplicate(nums: number[]): boolean {
        // function isDIfferent(arr1: number[]) {

        //     const sorted1 = [...arr1].sort((a, b) => a - b);
        //     const uniqueNum = new Set(sorted1);
        //     const res = sorted1.every((num) => uniqueNum.has(num));
        //     return !res;
        // }
        const nums2 =new Set(nums)
        return !(nums2.size===nums.length);
    }
}
