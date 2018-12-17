

function taken(position, myTeam) {

    let status = 1;

    for(let i = 0; i < chessPieces.length - 1; i++){
        
        let currentPosition = chessPieces[i].pos;
        
        if(currentPosition == position && myTeam == chessPieces[i].team) {
            status = 2; 
        
        }
        if(currentPosition == position && myTeam != chessPieces[i].team) {
            status = 3;
        }
    }
    return status;
}


