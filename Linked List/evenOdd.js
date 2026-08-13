var evenOdd=function(head){
    if(!head || !head.next ) return head;

    let odd=head;
    let even=head.next;
    let evenHead=even;

    while(even.next && odd.next){
        odd.next=odd.next.next;
        even.next=even.next.next;

        even=even.next;
        odd=odd.next;
    }
    odd.next=evenHead;
    return head;
}

