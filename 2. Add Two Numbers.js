/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let res = 0;
    let l1count = 1;
    let l2count = 1;
    let resListNode = null;
    let add = 0;
    do {
        res = l1.val * l1count + l2.val * l2count + add;
        add = parseInt(res / 10);
        resListNode = {
            val: res % 10,
            next: resListNode,
        }
        if (l1.next) {
            l1 = l1.next;
        } else {
            l1count = 0;
        }
        if (l2.next) {
            l2 = l2.next;
        } else {
            l2count = 0;
        }
    } while (l1count || l2count)
    if (add > 0) {
        resListNode = {
            val: add,
            next: resListNode,
        };
    }
    return reverse(resListNode);
};
function reverse(nodeLst) {
    var pNode = nodeLst;
    var pPre = null;   //翻转之后 第一个节点的next值 为 null   
    var pNext;
    while (pNode) {
        pNext = pNode.next;        //获取到当前节点的下一个节点
        pNode.next = pPre;         //当前节点的前一个指向上一个节点
        pPre = pNode;               //上一个节点赋值为当前节点
        pNode = pNext;              //当前节点赋值为下一个节点
    }
    return pPre;
}


//蛋疼的代码，只写出了顺序的，然后反转了链表
