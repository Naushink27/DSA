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

const lowestCommonAncestor = (root, p, q) => {
    let lca = null;
    

    function traverse(curr){
        let count = 0;
        if(!curr) return 0;
        let ansOnLeft=traverse(curr.left)
        let ansOnRight=traverse(curr.right)

        if(curr.val==p||curr.val==q){
            count++
        }
        count=count+ansOnLeft+ansOnRight

    if(count==2 && !lca){
            lca=curr
        }
        return count
    }
    traverse(root)
    return lca
}
console.log(lowestCommonAncestor(root, 13, 10))