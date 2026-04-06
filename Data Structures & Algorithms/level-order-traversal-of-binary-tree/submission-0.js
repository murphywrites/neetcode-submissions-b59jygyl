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
     * @return {number[][]}
     */
    levelOrder(root) {
    let bigList = []
    let queue = []
    let level = 0

    if (root === null) return bigList
    queue.push(root)

    while (queue.length > 0) {
        let levelSize = queue.length  // snapshot before shifting
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            (bigList[level] ||= []).push(curr.val)
            if (curr.left)  queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        level++
    }

    return bigList
}
}
