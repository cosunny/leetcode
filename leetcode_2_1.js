/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    // const newnode = new ListNode();
    let carry = 0;
    let cul1 = l1;
    let cul2 = l2;
    const headnode = new ListNode(0);
    let culn = headnode;
    while((cul1!==null) && (cul2!==null)){
        culn.next = new ListNode((cul1.val + cul2.val + carry)%10);
        culn = culn.next;
        if(cul1.val + cul2.val + carry >= 10){
            carry = 1;
        }else{carry = 0}
        cul1 = cul1.next;
        cul2 = cul2.next;
    }
    while(cul1!==null){
        culn.next = new ListNode((cul1.val  + carry)%10);
        culn = culn.next;
        if(cul1.val + carry === 10){
            carry = 1;
        }else{carry = 0}
        cul1 = cul1.next;
    }
    while(cul2!==null){
        culn.next = new ListNode((cul2.val  + carry)%10);
        culn = culn.next;
        if(cul2.val + carry === 10){
            carry = 1;
        }else{carry = 0}
        cul2 = cul2.next;
    }
    if(carry !== 0){
        culn.next = new ListNode(1)
    }

    return(headnode.next);
};

let listNode1 = new ListNode(2);
let currentnode = listNode1;
currentnode.next = new ListNode(4);
currentnode = currentnode.next;
currentnode.next = new ListNode(7);
currentnode = currentnode.next;

let listNode2 = new ListNode(5);
listNode2.next = new ListNode(6);
listNode2.next.next = new ListNode(4);

console.log(addTwoNumbers(listNode1, listNode2));