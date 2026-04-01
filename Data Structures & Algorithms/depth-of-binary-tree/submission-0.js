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
     * @return {number}
     */
    maxDepth(root) {
        let count = 0
        if(!root) {
            return count
        } else {
            count++
        }
        let rightCount = this.maxDepth(root.right)
        let leftCount = this.maxDepth(root.left)
        let subMax = Math.max(rightCount, leftCount)
        return subMax + count
        
    }
}
