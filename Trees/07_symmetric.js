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
/**
 * Create Binary Tree 2
 *
 *                 20
 *               /    \
 *             10      30
 *            /       /  \
 *           5       25   40
 *            \          /
 *             7        35
 *              \         \
 *               9         37
 *                          \
 *                           38
 */
const root2 = new TreeNode(
    20,
    new TreeNode(
        10,
        new TreeNode(
            5,
            null,
            new TreeNode(
                7,
                null,
                new TreeNode(9)
            )
        ),
        null
    ),
    new TreeNode(
        30,
        new TreeNode(
            25
        ),
        new TreeNode(
            40,
            new TreeNode(
                35,
                null,
                new TreeNode(
                    37,
                    null,
                    new TreeNode(38)
                )
            ),
            null
        )
    )
);

const symmetric=function(root1,root2){

    function isMirror(p,q){ 
        if(!p && !q) return true
        if(!p ||!q) return false

        if(p.val!==q.val) return false

        return isMirror(p.left,q.right) && 
               isMirror(p.right,q.left)

    }
    return isMirror(root1,root2)
}
console.log(symmetric(root,root2))


const symmetricIterative=function(root1,root2){
    let queue=[root1,root2]
    while(queue.length){
        let p=queue.shift()
        let q=queue.shift()

        if(!p && !q) continue
        if(!p ||!q) return false
        if(p.val!==q.val) return false

        queue.push(p.left,q.right)
        queue.push(p.right,q.left)
    }
    return true
}

console.log(symmetricIterative(root,root2))