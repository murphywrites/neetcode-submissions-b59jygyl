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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
    if(lists.length === 0) return null

    let dummy = new ListNode(0, null)

    for (let i = 1; i < lists.length; i++) {
        let list1 = i === 1 ? lists[i - 1] : dummy.next
        let list2 = lists[i]
        let tail = dummy  // ← reset tail each iteration
        tail.next = null  // ← sever old chain so it gets rebuilt cleanly

        while(list1 && list2){
            if(list1.val <= list2.val){
                tail.next = list1
                list1 = list1.next                    
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        tail.next = list1 || list2
    }
    return dummy.next
}
}
