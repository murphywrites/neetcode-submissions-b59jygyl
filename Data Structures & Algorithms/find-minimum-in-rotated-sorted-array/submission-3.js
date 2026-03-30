class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length-1
        
        while(l < r) {
            let m = Math.floor((l+r)/2) //5-0=>m=2
            console.log(nums[l],nums[m],nums[r])
            if (nums[m] > nums[r]){
                l = m + 1
            } else if(nums[m] < nums[r]) {
                r = m
            }
        }
        return nums[r]
    }
}
