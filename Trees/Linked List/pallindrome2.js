var isPallindrome=function(head) {
 //FInd middle
 let slow=fast=head;
 while(fast && fast.next){
    slow=slow.next;
    fast=fast.next.next;
 }


 //Reverse second half

 let prev=null;
 let curr=slow;
 while(curr){
    let temp=curr.next;
    curr.next=prev;
    prev=curr;
    curr=temp;
 }

 //Compare both halves
let start=head;
let end=prev;
while(end){
    if(start.val!==end.val){
        return false;
    }
    start=start.next;
    end=end.next;
}
return true;

}