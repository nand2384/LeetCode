class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let listNode1 = l1;
    let listNode2 = l2;
    const dummy = new ListNode(0);
    let current = dummy;
    while(listNode1 !== null || listNode2 !== null || carry !== 0) {
        let node1Val = listNode1 !== null ? listNode1.val : 0;
        let node2Val = listNode2 !== null ? listNode2.val : 0;
        let firstSum = node1Val + node2Val + carry;
        if(firstSum > 9) {
            carry = Math.floor(firstSum/10);
            current.next = new ListNode(firstSum%10);
            current = current.next;
        } else {
            carry = 0;
            current.next = new ListNode(firstSum);
            current = current.next;
        }
        listNode1 = listNode1?.next ?? null;
        listNode2 = listNode2?.next ?? null;
    }
    return dummy.next;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));