class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let opStack = [];
        for(let i = 0; i<tokens.length; i++){
            opStack.push(tokens[i]);
            if(['+','-','*','/'].includes(opStack[opStack.length-1])){
                console.log(opStack,'at i',i)
                let operator = opStack.pop()
                let operand2 = parseInt(opStack.pop())
                let operand1 = parseInt(opStack.pop())
                if(operator === "+") {
                    opStack.push(operand1 + operand2)
                } else if(operator === "-") {
                    opStack.push(operand1 - operand2)
                } else if(operator === "*") {
                    opStack.push(operand1 * operand2)
                } else if(operator === "/") {
                    opStack.push(Math.trunc(operand1 / operand2))
                }
            } else {
                opStack[opStack.length - 1] = parseInt(opStack[opStack.length - 1])
            }
        }
        return opStack.pop()
    }
}
