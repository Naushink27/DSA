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

const diameterOfBinaryTree = function(root) {
    let maxDiameter=0
    function findDepth(curr){
        if(!curr) return 0;
        let leftDepth=findDepth(curr.left)
        let rightDepth=findDepth(curr.right)
        let currDepth=leftDepth+rightDepth
        maxDiameter=Math.max(maxDiameter,currDepth)
        return 1+Math.max(leftDepth,rightDepth)

    }
    findDepth(root)
    return maxDiameter
}
console.log(diameterOfBinaryTree(root))