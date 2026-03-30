class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length).fill(1);
        let postfix = new Array(nums.length).fill(1);
        let output = new Array(nums.length).fill(1);
        
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = i - 1 >= 0 ? prefix[i - 1] * nums[i] : nums[i]
            postfix[nums.length - 1 - i] = i - 1 >= 0 ? postfix[nums.length - i] * nums[nums.length - 1 - i] : nums[nums.length - 1 - i]
        }
        for (let j = 0; j < nums.length; j++) {
            if(j - 1 >= 0 && j + 1 <= nums.length - 1) {
                output[j] = prefix[j - 1] * postfix[j+1]
            } else if (j === 0) {
                output[j] = postfix[j+1]
            } else if (j === nums.length - 1) {
                output[j] = prefix[j-1]
            }
            
        }
        return output
    }
}
