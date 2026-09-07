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

const kthSmallest = function(root, k) {
    ans=[]
    function traverse(curr){
        if(!curr) return;
        traverse(curr.left)
        ans.push(curr.val)
        traverse(curr.right)


    }
traverse(root)
return ans[k-1]
}
console.log(kthSmallest(validBST, 3)) // 3