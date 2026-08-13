//Approach 1

var maxProfit = function(prices) {
    let maxProfit=0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if((prices[j]-prices[i])>maxProfit){
                maxProfit=prices[j]-prices[i]
            }
        }

    }
    return maxProfit;
};

//Approach 2

var maxProfit = function(prices) {

    let min=prices[0];
    let maxProfit=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]-min>maxProfit){
            maxProfit=prices[i]-min;
        }
        if(prices[i]<min){
            min=prices[i];
        }
    }
}



// let prices=[7,6,4,3,1];


// let sell=Infinity;
// let buy=-Infinity;
// let profit=0;
// let index=0;
// for(let i=0;i<prices.length;i++){
//      if(prices[i]<sell){
//         sell=prices[i];
//         index=i;
//      }
// }


// for(let j=index;j<prices.length;j++){

//     if(prices[j]>buy&&prices[j]>sell){
//         buy=prices[j];
//     }
//     else{
//         buy=sell;
//     }
// }

// profit=buy-sell;
// console.log(profit,sell,buy);