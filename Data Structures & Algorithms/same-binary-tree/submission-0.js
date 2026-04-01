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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p === null && q === null) {
            return true
        }
        if(p === null || q === null) {
            return false
        }
        if(p.val !== q.val) {
            return false
        }
        
        // if(p.val !== q.val) {return false}
        let lp = p.left
        let rp = p.right
        let lq = q.left
        let rq = q.right
        if(this.isSameTree(lp, lq) && this.isSameTree(rp, rq)) {
            return true
        } else {
            return false
        }
        
    }
}
