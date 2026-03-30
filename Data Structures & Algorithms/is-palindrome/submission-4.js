class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // let arr = String(s).toLowerCase().split("").filter(letter => {
        //     const charCode = letter.charCodeAt(0)
        //     return (charCode >= 'a'.charCodeAt() && charCode <= 'z'.charCodeAt()) || (charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt()) 
        // })
        // return arr.join() === arr.reverse().join()
        let i = 0;
        let j = 0;
        let arr = s.split("")

        const handleChar = (char) => {
            const charCode = String(char).toLowerCase().charCodeAt();
            console.log(char,charCode)
            if ((charCode >= 'a'.charCodeAt() && charCode <= 'z'.charCodeAt()) || (charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt())){
                return charCode
            } else {
                return false
            }
        }

        while (i < arr.length/2) {
            let activeI = handleChar(arr[i])
            let activeJ = handleChar(arr[arr.length - 1 - j])
            console.log(activeI, activeJ)
            if(activeI && activeJ) {
                if (activeI === activeJ){
                    i++
                    j++
                } else {
                    return false
                }
            } else {
                if(!activeI) {
                    i++
                }
                if(!activeJ) {
                    j++
                }
            }
        }
        return true
    }
}
