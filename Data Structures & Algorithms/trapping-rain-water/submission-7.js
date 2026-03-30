class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = height[0]
        let maxPostf = new Array(height.length).fill(height[height.length-1])
        let area = 0
        
        for(let i = height.length - 1; i > -1; i--) {
            maxPostf[i] = Math.max(maxPostf[i+1] || 0,height[i])
        }

        for(let i = 0; i < height.length; i++) {
            maxLeft = Math.max(maxLeft, height[i-1] || 0)
            let calcHeight = Math.min(maxLeft,maxPostf[i+1])-height[i]
            let trappedHere = calcHeight >= 0 ? calcHeight : 0
            area += trappedHere
        }
        
        return area
    }
}
