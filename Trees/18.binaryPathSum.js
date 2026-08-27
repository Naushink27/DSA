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
const binaryMaxPathSum = (root) => {
    let maxSum = -Infinity;
    let traverse=function(curr){
        if(!curr) return 0
        let leftSum=Math.max(0,traverse(curr.left))
        let rightSum=Math.max(0,traverse(curr.right))

        let currSum=curr.val+leftSum+rightSum
        maxSum=Math.max(maxSum,currSum)

        return curr.val+Math.max(leftSum,rightSum)

    }
    traverse(root)
    return maxSum

}

console.log(binaryMaxPathSum(root))