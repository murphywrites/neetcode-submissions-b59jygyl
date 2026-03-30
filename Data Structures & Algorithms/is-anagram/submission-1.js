class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = s.split('').sort()
        const tArr = t.split('').sort()
        if (sArr.length !== tArr.length) {
            return false
        }
        let matched = true
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) {
                matched = false
                break
            }
        }
        return matched
    }
}
