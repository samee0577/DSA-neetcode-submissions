class Solution {
    productExceptSelf(nums: number[]): number[] {
        let leftArray = [];
        let rightArray = [];

        //leftSum
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                leftArray[i] = 1;
            } else {
                leftArray[i] = leftArray[i - 1] * nums[i - 1];
            }
        }

        //rightSum
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                rightArray[i] = 1;
            } else {
                rightArray[i] = rightArray[i + 1] * nums[i + 1];
            }
        }

        // totalarray
        const res = nums.map((_, i) => {
            return leftArray[i] * rightArray[i];
        });

        return res;
    }
}
