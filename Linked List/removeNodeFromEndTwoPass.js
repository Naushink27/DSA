var removeNodeFromEnd = function(head, n) {
    let sentinel=new ListNode();
    sentinel.next=head;

    //length of linked list

    let length=0;
    while(head){
        head=head.next;
        length++;
    }

    //find the node before the node to be removed
    let prevPos=length-n;
    let prev=sentinel;
    for(let i=0;i<prevPos;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;
    return sentinel.next;
}