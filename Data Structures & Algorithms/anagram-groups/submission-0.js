class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let wordMap = new Map()
        let abcArr = "abcdefghijklmnopqrstuvwxyz".split("")
        for (let i=0; i<strs.length; i++) {
            let countArray = Array(26).fill(0)
            let arr = strs[i].split("")
            for (let j=0; j<arr.length; j++) {
                countArray[arr[j].charCodeAt(0) - 97] += 1
            }
            if (wordMap.get(countArray.join(","))) {
                wordMap.get(countArray.join(",")).push(strs[i])
            } else {
                wordMap.set(countArray.join(","),[strs[i]])
            }
        }
        return [...wordMap.values()]
    }
}
