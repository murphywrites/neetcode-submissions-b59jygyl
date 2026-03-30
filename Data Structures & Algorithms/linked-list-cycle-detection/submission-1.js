/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head?.next
        let slow = head
        while (fast && slow) {
            fast = fast?.next?.next || null
            slow = slow?.next || null
            if(fast?.val === slow?.val){
                return true
            }
        }
        return false
    }
}
