class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = String(s).toLowerCase().split("").filter(letter => {
            const charCode = letter.charCodeAt(0)
            return (charCode >= 'a'.charCodeAt() && charCode <= 'z'.charCodeAt()) || (charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt()) 
        })
        return arr.join() === arr.reverse().join()
    }
}
