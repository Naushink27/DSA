var removeNodeFromEnd = function(head, n) {
    let sentinel=new ListNode();
    sentinel.next=head;

    //two pointer approach

    let first=sentinel
    for(let i=0;i<-n;i++){
        first=first.next;
    }

    let second=sentinel;
    while(first.next){
        first=first.next;
        second=second.next;
    }
    second.next=second.next.next;
    return sentinel.next;
}
