class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        let duplicate = null
        for (let i = 0; i < nums.length; i++) {
            const exInd = map.get(nums[i]) 
            if (typeof exInd == "number") {
                duplicate = nums[exInd]
                break
            } else {
                map.set(nums[i],i)
            }
        }
        return typeof duplicate === "number"
    }
}
