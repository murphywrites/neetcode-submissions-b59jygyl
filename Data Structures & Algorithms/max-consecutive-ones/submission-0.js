class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let globalMax = 0;
        let currMax = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currMax += 1
                if (currMax > globalMax) {
                    globalMax = currMax
                }
            } else {
                currMax = 0
            }
        }
        return globalMax
    }
}
