/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let nodes = [];
    if(lists.length === 0)
        return null;
    lists.forEach(item => {
        while(item){
            nodes.push(item);
            item = item.next;
        }
    });
    nodes.sort((a,b) => {
        return a.val - b.val;
    });
    nodes.forEach((item, index) => {
        if(index === nodes.length - 1)
            item.next = null;
        else
            item.next = nodes[index + 1];
    })
    if(nodes.length === 0)
        return null;
    return nodes[0];
};