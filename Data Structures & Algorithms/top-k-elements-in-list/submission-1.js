class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let results = [];
        for (let i = 0; i < nums.length; i++) {
            if(map.get(nums[i])){
                map.set(nums[i],map.get(nums[i]) + 1)
            } else {
                map.set(nums[i],1)
            }
        }

        let buckets = Array.from({length: nums.length + 1}, () => [])
        for (const [num, freq] of map.entries()) {
            buckets[freq].push(num)
        }

        for(let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
            results.push(...buckets[i])
        }
        return results
    }
}
