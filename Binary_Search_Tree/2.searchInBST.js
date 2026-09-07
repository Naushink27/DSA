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

const searchBST = function(root, val) {
    if (!root) return null;

    let ans = null;

    const traverse = (curr,val) => {
        if(!curr) return;
        if(curr.val==val) {
            ans=curr;
            return;
        }
        if(curr.val>val){
            traverse(curr.left,val)
        }
        if(curr.val<val){
            traverse(curr.right,val)
        }

    }
    traverse(root,val);
    return ans;
}

console.log(searchBST(validBST, 2)) // TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }