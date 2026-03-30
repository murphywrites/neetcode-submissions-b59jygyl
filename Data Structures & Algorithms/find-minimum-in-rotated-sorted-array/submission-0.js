class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //start at middle, check which split has lower last element
        let checkArr = nums
        while (checkArr.length > 1){
            let sliceI = Math.floor(checkArr.length/2)
            let searchSlice1 = checkArr.slice(0,sliceI)
            let searchSlice2 = checkArr.slice(sliceI)

            checkArr = searchSlice1[searchSlice1.length-1] < searchSlice2[searchSlice2.length-1] ? searchSlice1 : searchSlice2
        }
        return checkArr[0]
    }
}
