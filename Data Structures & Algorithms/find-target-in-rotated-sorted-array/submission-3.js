class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1
        if(nums[l] === target){
            return l
        }

        while (l < r) {
            let m = Math.floor((l+r)/2)
            
            if(nums[m] === target){
                return m
            }
            if(nums[l] === target){
                return l
            }
            if(nums[r] === target){
                return r
            }
            let lSorted = nums[l] <= nums[m]
            let rSorted = nums[r] >= nums[m]
            let bothSorted = lSorted && rSorted
            console.log(nums[l],nums[m],nums[r])
            if(bothSorted) {
                if(nums[m] < target) {
                    l = m + 1 //look right
                } else {
                    r = m - 1 //look left
                }
            }

            if(lSorted && !rSorted) {
                if(nums[m] > target){
                    if(nums[l] > target){
                        //look right
                        l = m + 1
                    } else {
                        //look left
                        r = m - 1
                    }
                    
                } else {
                    //look right
                    l = m + 1
                }
            }
            if(rSorted && !lSorted) {
                if(nums[m] > target){
                    if(nums[r] > target){
                        r = m - 1 // look left
                    } else {
                        console.log('imhere')
                        l = m + 1 // look right
                    }
                } else {
                    r = m - 1 // look left
                }
            }
        }
        return -1
    }
}
