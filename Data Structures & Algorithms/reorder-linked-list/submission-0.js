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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let second = slow.next
        slow.next = null

        let prev = null

        while(second) {
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        let l1 = head
        let l2 = prev
        
        
        while (l2) {
            let tmp1 = l1.next
            let tmp2 = l2.next
            l1.next = l2
            l2.next = tmp1
            l1 = tmp1
            l2 = tmp2
        }
    }
}
