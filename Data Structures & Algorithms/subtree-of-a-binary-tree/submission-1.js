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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isIdentical = (t1, t2) => {
            if(t1 === null && t2 === null) {
                return true
            }
            if(t1 === null || t2 === null) {
                return false
            }
            if(t1.val == t2.val){
                return (isIdentical(t1.left, t2.left) && isIdentical(t1.right, t2.right))
            }
        }

        if(!root) return false
        if(!subRoot) return true

        if(isIdentical(root, subRoot)) return true

        if(this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)) return true
        return false
        
    }
}
