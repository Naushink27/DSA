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

const lca=function(root, p, q) {
    if(p.val>root.val && q.val>root.val){
        return lca(root.right,p,q)
    }
    else if(p.val<root.val && q.val<root.val){
        return lca(root.left,p,q)
    }
    else{
        return root
    }

}
console.log(lca(validBST, validBST.left.left, validBST.left.right)) // TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }