//given a grid of oranges, where each cell can have one of three values:
//0 representing an empty cell,
//1 representing a fresh orange, or
//2 representing a rotten orange.
//Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
//Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


var orangesRotting = function(grid) {
    let m=grid.length
    let n=grid[0].length
    let queue=[]

    //push all rotten oranges into the queue
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==2){
                queue.push([i,j,0])
            }
    }
}

let maxMinutes=0

while(queue.length){
    let [x,y,min]=queue.shift()

    if(x>0 && grid[x-1][y]===1){
        grid[x-1][y]=2;
        queue.push([x-1,y,min+1])
    }
    if(x<m-1 && grid[x+1][y]===1){
        grid[x+1][y]=2;
        queue.push([x+1,y,min+1])
    }
    if(y>0 && grid[x][y+1]===1){
        grid[x][y+1]=2;
        queue.push([x,y+1,min+1])
    }
    if(y<n-1 && grid[x][y-1]===1){
        grid[x][y-1]=2;
        queue.push([x,y-1,min+1])
    }
    maxMinutes=Math.max(maxMinutes,min)
}
//check if any fresh oranges are left
for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(grid[i][j]===1){
            return -1
        }
    }
}
return maxMinutes;
}

//example usage:
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
console.log(orangesRotting([[0,2]]));