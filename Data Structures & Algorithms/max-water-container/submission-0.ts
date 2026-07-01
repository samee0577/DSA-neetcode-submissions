class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max: number = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const height = heights[right] > heights[left] ? heights[left] : heights[right];
            const width = right - left;
            let area = height * width;
            if (area > max) {
                max = area;
            }
            console.log("left num: ", heights[left]);
            console.log("right num :", heights[right]);
            console.log("height: ", height);
            console.log("width: ", width);
            console.log("current area: ", area);
            console.log("current max: ", max, "\n");
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
