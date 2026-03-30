class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSeen = prices[0]
        let maxProf = 0
        for (let i = 0; i < prices.length; i++) {            
                minSeen = Math.min(minSeen, prices[i])
                maxProf = Math.max(maxProf, prices[i] - minSeen)    
            }

            return maxProf
        }
    }
