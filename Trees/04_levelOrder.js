/**
 * Binary Tree Nodeeee
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

var levelOrder = function(root) {
    if(!root) return [];
    let ans=[]
    let queue=[root]
    while(queue.length){
        let len=queue.length
        let level=[]

        for(let i=0;i<len;i++){
            let curr=queue.shift()
            level.push(curr.val)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    ans.push(level)
    }
    return ans
}

console.log(levelOrder(root));

//Recursive approach
var levelOrderRecursive = function(root) {
    let ans=[]

    function traversal(curr,level){
        if(!curr) return;
        if(!ans[level]) ans[level]=[]
        ans[level].push(curr.val)
        curr.left && traversal(curr.left,level+1)
        curr.right && traversal(curr.right,level+1)
    }
    traversal(root,0)
    return ans
}

console.log(levelOrderRecursive(root));