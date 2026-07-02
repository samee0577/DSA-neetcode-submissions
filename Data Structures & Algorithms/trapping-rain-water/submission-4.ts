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
        let leftmax = [];
        let rightmax = [];
        let rm;
        let lm;

        for (let li = 0; li <= height.length - 1; li++) {
            leftmax[li] =
                leftmax[li - 1] === undefined ? height[li] : Math.max(height[li], leftmax[li - 1]);
            lm = leftmax[li];
        }

        for (let ri = height.length - 1; ri >= 0; ri--) {
            rightmax[ri] =
                rightmax[ri + 1] === undefined
                    ? height[ri]
                    : Math.max(height[ri], rightmax[ri + 1]);
            rm = rightmax[ri];
        }

        for (let i = 0; i < height.length; i++) {
            water += Math.min(leftmax[i], rightmax[i]) - height[i];
        }
        return water;
    }
}
