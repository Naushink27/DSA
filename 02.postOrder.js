/**
 * Binary Tree Node
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


/**
 * Create a complex binary tree
 *
 *                 1
 *              /     \
 *             2       3
 *           /  \     / \
 *          4    5   6   7
 *         / \    \      / \
 *        8   9   10    11 12
 *           /          \
 *          13           14
 *                        \
 *                         15
 */
const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            4,
            new TreeNode(8),
            new TreeNode(
                9,
                new TreeNode(13),
                null
            )
        ),
        new TreeNode(
            5,
            null,
            new TreeNode(10)
        )
    ),
    new TreeNode(
        3,
        new TreeNode(6),
        new TreeNode(
            7,
            new TreeNode(
                11,
                null,
                new TreeNode(14, null, new TreeNode(15))
            ),
            new TreeNode(12)
        )
    )
);

console.log(root);

var postOrder=function (root) {
    let ans=[]
    function  traversal(curr) {
        if (!curr) return;
        
        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.val)
    }
    traversal(root)
    return ans;
}
console.log(postOrder(root))

//Iterative solution

var postOrderIterative = function(root) {
    if(!root) return [];
    let ans=[]
    let s1=[root]
    let s2=[]

    while(s1.length){
        let curr=s1.pop()
        s2.push(curr)
       curr.left && s1.push(curr.left)
        curr.right && s1.push(curr.right)

    }

    while(s2.length){
        ans.push(s2.pop().val)
    }
    return ans;

}
console.log(postOrderIterative(root))

//single stack iterative solution

var postOrderIterativeSingleStack = function(root) {
    let s1=[]
    let ans=[]
    let curr=root
    let lastVisited=null

    while(curr || s1.length){
        while(curr){
            s1.push(curr)
            curr=curr.left
        }
        let peekElement=s1[s1.length-1]

        if(peekElement.right && peekElement.right!==lastVisited){
            curr=peekELement.right
        }
        ans.push(peekElement.val)
        lastVisited=s1.pop()
    }
    return ans;
}