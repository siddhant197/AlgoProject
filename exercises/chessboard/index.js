function getHorizontalMoves(x, y, xMoves, pieceMoves){
    const xMovesArray = [];
    for(let num of pieceMoves){
        if((xMoves.indexOf(x)+num >= 0) && (xMoves.indexOf(x)+num <=7)){
            xMovesArray.push(xMoves[xMoves.indexOf(x)+num]+y);
        }
    }
    return xMovesArray.toString();
}

function getVerticalMoves(x, y, yMoves, pieceMoves){
    const yMovesArray = [];
    for(let num of pieceMoves){
        if((yMoves.indexOf(y)+num >= 0) && (yMoves.indexOf(y)+num <=7)){
            yMovesArray.push(x+yMoves[yMoves.indexOf(y)+num]);
        }
    }
    return yMovesArray.toString();
}

function getDiagonalMoves(x, y, xMoves, yMoves, pieceMoves){
    const xyMovesArray = [];
    for(var numx of pieceMoves){
        if((xMoves.indexOf(x)+numx >= 0) && (xMoves.indexOf(x)+numx <=7)){
            let xAlpha = xMoves[xMoves.indexOf(x)+numx];
            for(let num of [numx,(-1)*numx]){
                if((yMoves.indexOf(y)+num >= 0) && (yMoves.indexOf(y)+num <=7)){
                    xyMovesArray.push(xAlpha+yMoves[yMoves.indexOf(y)+num]);
                }
            }
        }
    }
    return xyMovesArray.toString();
}

function getHorseMoves(x, y, xMoves, yMoves){
    const xArray = [];
    const moveComplete = [];
    for(let moves of [1, -1]){
        if((xMoves.indexOf(x)+moves >= 0) && (xMoves.indexOf(x)+moves <= 7)){
            var moveAlpha = xMoves[xMoves.indexOf(x)+moves];
        }
        if((xMoves.indexOf(x)+(moves*2) >= 0) && (xMoves.indexOf(x)+(moves*2) <= 7)){
            var moveSecond = xMoves[xMoves.indexOf(x)+(moves*2)];
        }
        for(let moreMoves of [moves*1, moves*(-1)]){
            let doubleMoves = moreMoves*2;
            if(moveSecond!=undefined && (yMoves.indexOf(y)+moreMoves >= 0) && (yMoves.indexOf(y)+moreMoves <= 7)){
                if(!moveComplete.includes(moveSecond+yMoves[yMoves.indexOf(y)+moreMoves])){
                    moveComplete.push(moveSecond+yMoves[yMoves.indexOf(y)+moreMoves]);
                }
            }
            if(moveAlpha!=undefined && (yMoves.indexOf(y)+doubleMoves >= 0) && (yMoves.indexOf(y)+doubleMoves <= 7)){
                if(!moveComplete.includes(moveAlpha+yMoves[yMoves.indexOf(y)+doubleMoves])){
                    moveComplete.push(moveAlpha+yMoves[yMoves.indexOf(y)+doubleMoves]);
                }
            }
        }
    }
    return moveComplete;
}

function possibleMoves(piece, pos){
    const xMoves = ['A','B','C','D','E','F','G','H'];
    const yMoves = ['1','2','3','4','5','6','7','8'];
    const kingMoves = [1,-1];
    const rqbMoves = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8];
    const pawnMoves = [1];

    const possibleMovesArray = [];

    if(!piece || pos.length!=2 || !xMoves.includes(pos[0]) || !yMoves.includes(pos[1])){
        console.log("Invalid Inputs");
        return false;
    }

    
    if(piece === "King"){
        possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, kingMoves));
        possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, kingMoves));
        possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, kingMoves));
    }else if(piece === "Queen"){
        possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, rqbMoves));
        possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, rqbMoves));
        possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, rqbMoves));
    }else if(piece === "Bishop"){
        possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, rqbMoves));
    }else if(piece === "Rook"){
        possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, rqbMoves));
        possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, rqbMoves));
    }else if(piece === "Pawn"){
        possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, pawnMoves));
    }else if(piece === "Horse"){
        possibleMovesArray.push(getHorseMoves(pos[0], pos[1], xMoves, yMoves));
    }else{
        console.log("Invalid Piece");
        return false;
    }
    console.log(possibleMovesArray.toString());
    return possibleMovesArray.toString();
}


module.exports = possibleMoves;