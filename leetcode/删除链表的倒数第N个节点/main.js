/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodes = [],current = head;
    while(current){
        nodes.push(current);
        current = current.next;
    }
    let originLen = nodes.length;
    nodes.splice(nodes.length - n,1);
    if(nodes.length === 0)
        return null;
    if(n === 1){
        nodes[nodes.length - 1].next = null;
    }else if(n  < originLen){
        nodes[nodes.length - n].next = nodes[nodes.length - n + 1];
    }
    return nodes[0];
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
// let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
// node3.next = node4;

let head = removeNthFromEnd(node1,2);
while(head){
    console.log(head.val);
    head = head.next;
}