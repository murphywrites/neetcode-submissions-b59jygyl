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
    isPalindrome(head) {
        let fast = head
        let slow = head
        let prev = null
        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        while(slow) {
            let tmp = slow.next
            slow.next = prev
            prev = slow
            slow = tmp
        }

        let [left, right] = [head, prev]
        while (right) {
            if(left.val !== right.val) {
                return false
            }
            left = left.next
            right = right.next
        }
        return true
    }
}
