/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_profit = 0;
    let min_day = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min_day) {
            min_day = prices[i]
        } else {
            let profit = prices[i] - min_day
            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }
    return max_profit
};