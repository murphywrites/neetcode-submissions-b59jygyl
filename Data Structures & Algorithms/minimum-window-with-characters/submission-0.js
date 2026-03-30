class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //init a freqmap
        let windowFreqMap = new Map();
        let tFreqMap = new Map();
        let l = 0;
        let tArr = t.split('')
        let sArr = s.split('')
        let minSubstring = ""

        for(const letter in t.split("")) {
            let tmpFreq = tFreqMap.get(tArr[letter]) || 0
            tFreqMap.set(tArr[letter], tmpFreq + 1)
        }

        const validSoFar = (wfm) => {
                for(const [key, value] of tFreqMap) {
                    console.log('key', key)
                    if((wfm.get(key) || 0) < value){
                        console.log(wfm,'is not Valid')
                        return false
                    }
                }
                console.log(wfm,'is Valid')
                return true
            }
        // init l pointer
        //for loop, incrementing r 
        for (let r = 0; r < s.length; r++) {
            let tmpFreq = windowFreqMap.get(sArr[r]) || 0
            windowFreqMap.set(sArr[r], tmpFreq + 1)
            
            let valid = validSoFar(windowFreqMap)
            
            while (valid) {
                let windowString = s.split("").slice(l, r + 1).join("")
                let tmpFreq = windowFreqMap.get(sArr[l]) || 0
                windowFreqMap.set(sArr[l], tmpFreq - 1)
                minSubstring = ((windowString.length > 0 && minSubstring.length === 0) || (windowString.length < minSubstring.length)) ? windowString : minSubstring
                l++
                valid = validSoFar(windowFreqMap)
            }
        }
        
        // // update freqmap with current
        // check if freqmap covers tFreqMap
        // set minSubstring using current window
        // if no freqmap match,decrement sArr[l], increment l++
        // return minSubstring
        console.log(minSubstring)
        return minSubstring
    }
}
