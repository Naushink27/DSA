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

var inOrder=function (root) {
    let ans=[]
    function  traversal(curr) {
        if (!curr) return;
        
        traversal(curr.left)
        ans.push(curr.val)
        traversal(curr.right)
    }
    traversal(root)
    return ans;
}
console.log(inOrder(root))

//iterative solution

var inOrderIterative = function(root) {
    if(!root) return [];
    let stack = [];
    let curr=root;
    let ans=[];

    while(curr ||stack.length){
        while(curr){
            stack.push(curr)
            curr=curr.left;
        }
        curr=stack.pop()
        ans.push(curr.val)
        curr=curr.right
    }
    return ans;
}

console.log(inOrderIterative(root))