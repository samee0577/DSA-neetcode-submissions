class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (height.length <= 2) {
            return 0;
        }
        let water = 0;

        for (let i = 0; i < height.length; i++) {
            let leftmax = [];
            let rightmax = [];
            let rm;
            let lm;
            for (let li = 0; li <= i; li++) {
                leftmax[li] =
                    leftmax[li - 1] === undefined
                        ? height[li]
                        : Math.max(height[li], leftmax[li - 1]);
                lm = leftmax[li];
            }

            for (let ri = height.length - 1; ri >= i; ri--) {
                rightmax[ri] =
                    rightmax[ri + 1] === undefined
                        ? height[ri]
                        : Math.max(height[ri], rightmax[ri + 1]);
                rm = rightmax[ri];
            }
            water = water + Math.min(rm, lm) - height[i];
        }
        return water
    }
}
