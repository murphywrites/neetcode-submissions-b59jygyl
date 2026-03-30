class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxPref = new Array(height.length).fill(height[0])
        let maxPostf = new Array(height.length).fill(height[height.length-1])
        let area = 0
        
        for(let i = 0; i < maxPref.length; i++) {
            maxPref[i] = Math.max(maxPref[i-1] || 0,height[i])
        }
        for(let i = maxPostf.length - 1; i > -1; i--) {
            maxPostf[i] = Math.max(maxPostf[i+1] || 0,height[i])
        }

        for(let i = 0; i < height.length; i++) {
            console.log(maxPref[i],maxPostf[i],height[i])
            let trappedHere = Math.min(maxPref[i],maxPostf[i])-height[i]
            console.log(maxPref,maxPostf,height[i],trappedHere)
            area += trappedHere
        }
        
        return area
    }
}
