
let chessPieces = [pawn1, pawn2, knight, pawn3];

function isTaken(objArray, position) {
    let objFound = false;
    for(i = 0; i < objArray.length; i++) {
        
        if(objArray[i].pos == position) {
            return objArray[i];
        }
    }
    if(objFound == false) {
        return false;
    }
}

console.log(isTaken(chessPieces, "a8"));

