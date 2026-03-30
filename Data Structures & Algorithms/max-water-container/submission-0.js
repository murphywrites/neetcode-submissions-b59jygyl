class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let lp = 0;
        let rp = heights.length - 1
        let runningMax = 0
        const calcArea = (l,r) => {
            return (r-l) * Math.min(heights[l], heights[r])
        }
        while (lp < rp){
            runningMax = Math.max(calcArea(lp,rp),runningMax)
            if(heights[rp] <= heights[lp]) {
                rp--
            } else {
                lp++
            }
        }
        return runningMax
    }
}
