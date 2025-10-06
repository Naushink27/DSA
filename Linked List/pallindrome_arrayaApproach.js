var isPallindrome = function(head) {
    let arr=[];
    let temp=head;
while(temp){
    arr.push(temp.val);
    temp=temp.next;
}
for(let i=0;i<Math.floor(arr.length/2);i++){
    if(arr[i]!==arr[arr.length-1-i]){
        return false;
    }
}
return true;
}