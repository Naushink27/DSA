//We have given a n*n chessboard and we have to place n queens in such a way that no two queens can attack each other. We have to return all the possible arrangements of the queens in the chessboard.


var solveNQueens = function(n) {
    let res=[]
     let board = Array.from({ length: n }, () => Array(n).fill("."));
    let backtrack=(board,row,colSet,digSet,antiDigSet)=>{
        if(row===n){
            res.push(transform(board))
            return;
        }
        for(let col=0;col<n;col++)
        {
            if(colSet.has(col)||
               digSet.has(row-col)||
               antiDigSet.has(row+col)){
                continue;
               }
               board[row][col]='Q'
               colSet.add(col)
               digSet.add(row-col)
               antiDigSet.add(row+col)

               backtrack(board,row+1,colSet,digSet,antiDigSet)

               board[row][col]='.'
                colSet.delete(col)
                digSet.delete(row-col)
                antiDigSet.delete(row+col)
               
        }
    }
    backtrack(board,0,new Set(),new Set(),new Set())
    return res;


}
let transform=(board)=>{
    let newBoard=[]
    for(let i=0;i<board.length;i++){
        newBoard.push(board[i].join(''))
    }
    return newBoard;
}

console.log(solveNQueens(8))