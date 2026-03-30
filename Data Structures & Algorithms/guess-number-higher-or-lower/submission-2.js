/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 1
        let high = n
        while(low <= high) {
        let mid = Math.floor((high + low)/2)
        console.log(mid)
        let g = guess(mid)
        console.log(g)
        if (g === 0) {
            return mid
        } else if (g === -1) {
            high = mid - 1
        } else {
            low = mid + 1
        }
        }


    }
}
