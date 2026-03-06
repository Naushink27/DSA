let arr=[1,2,3,4,5
]

let suffix=new Array(arr.length)
let n=arr.length

suffix[n-1]=arr[n-1]

for(let i=n-2;i>=0;i--){
    suffix[i]=suffix[i+1]*arr[i]
}
console.log(suffix)