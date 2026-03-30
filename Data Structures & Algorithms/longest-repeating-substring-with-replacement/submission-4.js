class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxFreq = 1;
        let maxLength = 0;
        let freqMap = new Map();
        let sArr = s.split("")

        for (let r = 0; r < s.length; r++) {
            let windowLength = r - l + 1;
            let currFreq = freqMap.get(sArr[r]) || 0
            freqMap.set(sArr[r], currFreq + 1)
            maxFreq = Math.max(maxFreq, currFreq + 1)
            let replacements = windowLength - maxFreq
            console.log(replacements, maxFreq)
            if(replacements <= k) {
                maxLength = Math.max(windowLength, maxLength)
            } else {
                freqMap.set(sArr[l], freqMap.get(sArr[l]) - 1)
                l++
            }
        }
        return maxLength
    }
}
