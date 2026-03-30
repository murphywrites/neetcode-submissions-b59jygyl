class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let output = new Array(arr.length);
        for(let i = 0; i < arr.length; i++) {
            let rMax = -1
            for (let j = arr.length; j > i; j--) {
                if(arr[j] > rMax) {
                    rMax = arr[j]
                }
            }
            output[i] = rMax
        }
        return output
    }
}
