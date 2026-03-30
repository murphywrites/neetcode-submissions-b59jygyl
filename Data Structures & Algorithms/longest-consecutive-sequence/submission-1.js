class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let maxSeq = 0
        for(const num of nums) {
            if(!set.has(num-1)) {
                let len = 1
                let cur = num
                while(set.has(cur+1)){
                    len++
                    cur++
                }
                maxSeq = Math.max(maxSeq,len)
            }
    }
    return maxSeq
}
}
