function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// THIS IS YOUR VALID BST TEST CASE
const validBST = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    if(root.val>val){
     root.left=insertIntoBST(root.left,val)
    }
    if(root.val<val){
        root.right=insertIntoBST(root.right,val)
    }
    return root;

}

console.log(insertIntoBST(validBST, 5)) // TreeNode { val: 4, left: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }, right: TreeNode { val: 7, left: TreeNode { val: 6, left: null, right: null }, right: TreeNode { val: 9, left: TreeNode { val: 5, left: null, right: null }, right: null } } }