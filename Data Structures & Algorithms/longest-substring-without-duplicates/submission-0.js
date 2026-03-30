class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0 || s.length === 1) {
            return s.length
        }
        let set = new Set()
        let lengthOfLongest = 1
        let arr = s.split("")
        
        for(let i = 0; i<s.length; i++) {
            let r = i + 1
            let currLength = 1
            set[arr[i]] = true
            while(r < s.length){
                if(!set[arr[r]]){
                    set[arr[r]] = true
                    currLength++
                    r++
                } else {
                    break
                }
            }
            lengthOfLongest = Math.max(lengthOfLongest,currLength)
            set = new Set()
        }
        return lengthOfLongest
    }
}
