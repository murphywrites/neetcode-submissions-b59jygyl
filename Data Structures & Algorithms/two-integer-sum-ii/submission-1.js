class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lp = 1;
        let rp = numbers.length
        while (lp<rp) {
            let curSum = numbers[lp-1] + numbers[rp-1]
            if(curSum === target){
                return [lp,rp]
            } else if(curSum < target) {
                lp++
            } else {
                rp--
            }
        }
    }
}
