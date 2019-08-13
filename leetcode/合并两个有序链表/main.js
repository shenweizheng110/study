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
var mergeTwoLists = function(l1, l2) {
    let head = null, current = null;
    while(l1 || l2){
        let currentNode = null;
        if(!l1){
            currentNode = l2;
            l2 = l2.next;
        }else if(!l2){
            currentNode = l1;
            l1 = l1.next;
        }else {
            if(l1.val > l2.val){
                currentNode = l2;
                l2 = l2.next;
            }else{
                currentNode = l1;
                l1 = l1.next;
            }
        }
        if(head === null){
            head = currentNode;
            current = head;
            current.next = null;
        }else{
            currentNode.next = null;
            current.next = currentNode;
            current = current.next;
        }
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node11 = new ListNode(1);
let node12 = new ListNode(2);
let node13 = new ListNode(4);

node11.next = node12;
node12.next = node13;

let node21 = new ListNode(1);
let node22 = new ListNode(3);
let node23 = new ListNode(4);

node21.next = node22;
node22.next = node23;

let head = mergeTwoLists(node11, node21);
while(head){
    console.log(head.val);
    head = head.next;
}