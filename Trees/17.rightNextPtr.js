/**

* Binary Tree Node with next pointer
  */
  function Node(val, left = null, right = null, next = null) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
  }

/**

* Perfect Binary Tree
*
* ```
              1
  ```
* ```
           /     \
  ```
* ```
          2       3
  ```
* ```
        /  \     / \
  ```
* ```
       4    5   6   7
  ```
* ```
      / \  / \ / \ / \
  ```
* ```
     8  9 10 11 12 13 14 15
  ```
*
* Expected next pointers:
*
* Level 1:
* 1 → null
*
* Level 2:
* 2 → 3 → null
*
* Level 3:
* 4 → 5 → 6 → 7 → null
*
* Level 4:
* 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → null
  */

const root = new Node(
1,


new Node(
    2,
    new Node(
        4,
        new Node(8),
        new Node(9)
    ),
    new Node(
        5,
        new Node(10),
        new Node(11)
    )
),

new Node(
    3,
    new Node(
        6,
        new Node(12),
        new Node(13)
    ),
    new Node(
        7,
        new Node(14),
        new Node(15)
    )
)


);


const rightNextPtr=function(root){
    let traverse=function(curr){
        if(curr.left){
            curr.left.next=curr.right

        }
        if(curr.right && curr.next){
            curr.right.next=curr.next.left
        }
        curr.left && traverse(curr.left)
        curr.right && traverse(curr.right)

    }
    traverse(root)
    return root
}
const result=rightNextPtr(root)
console.log(result)