/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let nodes = [];
    if(!head)
        return null;
    while(head){
        nodes.push(head);
        head = head.next;
    }
    for(let i = 0; i < nodes.length; i = i + 2){
        if(i + 1 < nodes.length){
            let temp = nodes[i];
            nodes[i] = nodes[i + 1];
            nodes[i + 1] = temp;
        }
    }
    nodes.forEach((item,index) => {
        if(index === nodes.length - 1)
            item.next = null;
        else
            item.next = nodes[index + 1];
    })
    if(nodes.length === 0)
        return null;
    return nodes[0];
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head = swapPairs(node1);
while(head){
    console.log(head.val);
    head = head.next;
}