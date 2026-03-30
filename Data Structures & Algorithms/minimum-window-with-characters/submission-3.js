class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let windowFreqMap = new Map();
        let tFreqMap = new Map();
        let l = 0;
        let tArr = t.split('')
        let sArr = s.split('')
        let minStartEnd = [null,null]
        let countValid = 0
        let currentCount = 0

        for(let i = 0; i < tArr.length; i++) {
            let tmpFreq = tFreqMap.get(tArr[i]) || 0
            tFreqMap.set(tArr[i], tmpFreq + 1)
            countValid++
        }
        console.log(tFreqMap, 'tfreq')
        for (let r = 0; r < s.length; r++) {
            let tmpFreq = windowFreqMap.get(sArr[r]) || 0
            windowFreqMap.set(sArr[r], tmpFreq + 1)
            
            if(!!tFreqMap.get(sArr[r]) && tFreqMap.get(sArr[r]) >= (tmpFreq + 1)){
                console.log(r,l)
                currentCount++
            }
            
            let correctCount = countValid === currentCount
            console.log("the count is ", correctCount, countValid, currentCount)
            while (correctCount) {
                let tmpFreq = windowFreqMap.get(sArr[l]) || 0
                windowFreqMap.set(sArr[l], tmpFreq - 1)
                if(tmpFreq === tFreqMap.get(sArr[l])) {
                    currentCount--                    
                }
                if(!minStartEnd[0] || (minStartEnd[1] - minStartEnd[0]) > (r - l)) {
                    minStartEnd[1] = r
                    minStartEnd[0] = l
                }        
                l++
                correctCount = countValid === currentCount
            }
            console.log(minStartEnd)
        }

        return minStartEnd[0] !== null ? s.split("").slice(minStartEnd[0], minStartEnd[1] + 1).join('') : ""
    }
}
