class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []
        let map = new Map();
        let sortedNums = nums.sort((a,b) => a-b);
        for (let i = 1; i<nums.length - 1; i++) {
            let lp = 0
            let rp = nums.length - 1
            while(lp<i && i<rp) {
                let lv = sortedNums[lp];
                let rv = sortedNums[rp];
                let elseSum = rv + lv
                if(elseSum === -nums[i]) {
                    !map.get([lv,nums[i],rv].join()) && output.push([lv,nums[i],rv])
                    map.set([lv,nums[i],rv].join(), true)
                }
                if(elseSum >= -nums[i]){
                    rp--
                } else {
                    lp++
                }
            }
        }
        return output
    }
}
