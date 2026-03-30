class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => str.length + "#" + str).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let strs = []
        while (i < str.length) {
            let j = str.indexOf("#",i)
            let len = parseInt(str.slice(i,j))
            let word = str.slice(j+1,j+1+len)
            strs.push(word)
            i = j + len + 1
        }
        return strs
    }
}
