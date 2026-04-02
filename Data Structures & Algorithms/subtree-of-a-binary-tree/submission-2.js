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
        const isSameTree = (t1, t2) => {
            if(t1 === null && t2 === null) return true
            if(t1 === null || t2 === null) return false
            if(t1.val !== t2.val) return false

            if(isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)){
                return true
            } else {
                return false
            }
        }

        if(root === null) return false
        if(subRoot === null) return true

        if(isSameTree(root, subRoot)){
            return true
        } else {
            if(this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)) {
                return true
            } else {
                return false
            }
        }
    }
}
