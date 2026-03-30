class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        
        let area = 0
        
        const findMinEdge = (index) => {
            let lDelta = -1
            let rDelta = 1
            let lFound = false
            let rFound = false
            let lMax = 0
            let rMax = 0
            let lCurr = 0
            let rCurr = 0
            while(!lFound) {
                let lPrev = height[index+lDelta+1]
                lCurr = height[index+lDelta] || lCurr
                let lNext = height[index+lDelta-1]
                lMax = Math.max(lCurr,lMax)
            if(index+lDelta < 0) {
                lFound = true
            } else {
                lDelta--
            }
            }

            while(!rFound) {
                let rPrev = height[index+rDelta-1]
                rCurr = height[index+rDelta] || rCurr
                let rNext = height[index+rDelta+1]
                rMax = Math.max(rCurr,rMax)
            if(index+rDelta > (height.length - 1)) {
                rFound = true
            } else {
                rDelta++
            }
            }
            // console.log('index',index,'height at index',height[index],'lCurr',lCurr,'rCurr',rCurr,'calced height',Math.min(lCurr === 0 ? lCurr : lCurr - height[index] >= 0 ? lCurr - height[index] : 0, rCurr === 0 ? rCurr : rCurr - height[index] >= 0 ? rCurr - height[index] : 0))
            // return Math.min(lCurr === 0 ? lCurr : lMax - height[index] >= 0 ? lMax - height[index] : 0, rCurr === 0 ? rCurr : rCurr - height[index] >= 0 ? rCurr - height[index] : 0)
            console.log('lmax rmax index, h at i',lMax,rMax,index,height[index])
            let lCalc = lMax - height[index] >= 0 ? lMax - height[index] : 0;
            let rCalc = rMax - height[index] >= 0 ? rMax - height[index] : 0;
            console.log('lcalc/rcalc',lCalc,rCalc)
            return Math.min(lCalc,rCalc)
        }

        for(let i = 0; i < height.length; i++) {
            let trappedHere = findMinEdge(i)
            area += trappedHere
        }
        
        return area
    }
}
