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

const rightSideView = (root) => {
    if(!root) return [];
    let q=[root]
    let ans=[]
    while(q.length){
        let n=q.length
    for(let i=0;i<n;i++){
        let curr=q.shift()
        i==0 && ans.push(curr.val)

        curr.right && q.push(curr.right)
        curr.left && q.push(curr.left)
    }
    }
    return ans
}

const result = rightSideView(root)
console.log(result)