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


const isValidBST=function(root){

    

    const traverse=function(curr,lo,hi){
        if(!curr) return true;
        if((lo!==null && curr.val<=lo)  || (hi!==null && curr.val>=hi))
        {
            return false
        }
        let left=traverse(curr.left,lo,curr.val)
        let right=traverse(curr.right,curr.val,hi)

        return left && right
    }
    return traverse(root,null,null)


}
console.log(isValidBST(validBST)) // true