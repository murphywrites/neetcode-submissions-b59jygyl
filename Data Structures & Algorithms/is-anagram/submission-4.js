class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        let countS = Array(26).fill(0)
        let countT = Array(26).fill(0)
        let arrS = s.split("")
        let arrT = t.split("")

        for (let i = 0; i<s.length; i++) {
            countS[arrS[i].charCodeAt(0)-"a".charCodeAt(0)] ++
            countT[arrT[i].charCodeAt(0)-"a".charCodeAt(0)] ++
        }
        for (let i = 0; i < 26; i++) {
            if (countS[i] !== countT[i]) return false;
        }
        return true;
    }
}
