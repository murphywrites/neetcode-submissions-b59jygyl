class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
     
    isValid(s) {
        const openChars = ["{", "[", "("]
        const closeChars = ["}","]",")"]
        const stack = []
        const strArr = s.split("")
        for (let i = 0; i<strArr.length; i++) {
            if (openChars.includes(strArr[i])) {
                stack.push(strArr[i])
            }
            if (closeChars.includes(strArr[i])) {
                const lastElem = stack[stack.length-1]
                const targetOpen = strArr[i] === "}" ? "{" : strArr[i] === ")" ? "(" : "["
                if (lastElem !== targetOpen) {
                    return false
                } else {
                    stack.pop()
                }
            }
        }
        return stack.length === 0
    }
}
