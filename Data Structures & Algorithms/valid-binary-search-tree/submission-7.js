/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    isValidBST(root) {
        
        const validate = (root, min, max) => {
            if(root === null) return true
            let leftValid = true
            let rightValid = true
            if(root.val > min && root.val < max) {
                    leftValid = validate(root.left,min,root.val)
                    rightValid = validate(root.right,root.val,max)
                return leftValid && rightValid
            } else {
                return false
            }
    }

    return validate(root, -Infinity, Infinity)

}}