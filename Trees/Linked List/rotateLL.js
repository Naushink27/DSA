var rotateLL=function (head,k){
    if(!head || k===0) return head;
    let curr=head;
    let len=0
    while(curr){
        len++;
        curr=curr.next;
    }
    k=k%len;
    if(k===0) return head;
    let slow=head,fast=head;
    for(let i=0;i<k;i++){
        fast=fast.next;
    }
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    fast.next=head;
    head=slow.next;
    slow.next=null;
    return head;
}