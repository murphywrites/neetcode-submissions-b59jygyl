class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        for (let i = 0; i < numbers.length; i++) {
            let curTarget = target - numbers[i]
            if(map.get(curTarget) && curTarget < numbers[i]) {
                return [map.get(curTarget), i+1]
            }
            map.set(numbers[i],i+1)
        }
    }
}
