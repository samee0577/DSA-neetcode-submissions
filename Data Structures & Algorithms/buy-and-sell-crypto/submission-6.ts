class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0];
        let max = 0;
        for (let p of prices) {
            if (buy > p) {
                buy = p;
            }
            else if(p-buy>max) {
                max=p-buy
            }
        }

        console.log(buy, max);
        return max;
    }
}
