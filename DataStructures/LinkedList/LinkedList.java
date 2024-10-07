package LinkedList;
   class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
        val = x;
        next = null;
     }
    }
public class LinkedList {
    public boolean hasCycle(ListNode head) {
        return false;
    }
    public static void main(String[] args) {
        System.out.println("dd");
        ListNode head = new ListNode(0);
        head.next = new ListNode(1);
        head.next.next = new ListNode(2);
        System.out.println(head.val);
        System.out.println(head.val);
        System.out.println(head.next.val);
        System.out.println(head.next.next.val);
        LinkedList linkedList = new LinkedList();
        boolean test = linkedList.hasCycle(null);
        System.out.println(test);
    }
}
