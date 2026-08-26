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
 * Create a valid Subtree to test against (Extract of Node 7)
 * 
 *               7
 *              / \
 *             11  12
 *              \
 *               14
 *                \
 *                 15
 */
const subRoot = new TreeNode(
    7,
    new TreeNode(
        11,
        null,
        new TreeNode(14, null, new TreeNode(15))
    ),
    new TreeNode(12)
);


// ========================================================
// SUBTREE ALGORITHM SOLUTION
// ========================================================

const isSubtree=function(root,subRoot){
let hash1=serialization(root)
let hash2=serialization(subRoot)

return hash1.includes(hash2)
}

let serialization=function(root){
    let hash=""

    function traverse(node){
        if(!node){
            hash=hash+"-#"
            return
        }
        hash=hash+"-"+node.val
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return hash
}

const result=isSubtree(root,subRoot)
console.log("Is Subtree: ",result)