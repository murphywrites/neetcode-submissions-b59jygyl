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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // if((root.left === p || root.left === q) && (root.right === p || root.right === q)) {
        //     return root
        // }
        console.log(root.val)
        if((p.val <= root.val && q.val >= root.val) || (p.val >= root.val && q.val <= root.val)) {
            return root
        } else {
            if(p.val < root.val && q.val < root.val && root.left) {
                return this.lowestCommonAncestor(root.left, p, q)
            } else {
                return this.lowestCommonAncestor(root.right, p, q)
            }
        }

    }
}
