class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let result = [];

        for (let fixed = 0; fixed < nums.length - 2; fixed++) {
            let left = fixed + 1;
            let right = nums.length - 1;
            if(nums[fixed]===nums[fixed -1]){
                continue
            }
            while (left < right) {
                const target = -nums[fixed];
                const leftNumber = nums[left];
                const rightNumber = nums[right];
                const currentSum = leftNumber + rightNumber;

                if (currentSum === target) {
                    result.push([-target, leftNumber, rightNumber]);
                    left++;
                    right--;
                    while(left<right && nums[left]=== nums[left-1]){left++}
                    while(left<right && nums[right]=== nums[right+1]){right--}
                } else if (currentSum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    }
}
