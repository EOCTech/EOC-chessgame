/* EJ create class code*/
class Chesspiece {
    constructor(type, pos, team, turn, check, checkmate, isDead) {
        this.type = type
        this.pos = pos
        this.team = team
        this.turn = turn
        this.check = check
        this.checkmate = checkmate
        this.isDead = isDead
    }
}

let chessPieces = [];
/* create all objects code*/
const rook1 = new Chesspiece("rook", "a1", "white", "1", false, false, false);
chessPieces.push(rook1);
const rook2 = new Chesspiece("rook", "h1", "white", "1", false, false, false);
chessPieces.push(rook2);
const rook3 = new Chesspiece("rook", "a8", "black", "1", false, false, false);
chessPieces.push(rook3);
const rook4 = new Chesspiece("rook", "h8", "black", "1", false, false, false);
chessPieces.push(rook4);

const pawn1 = new Chesspiece("pawn", "a2", "white", "1", false, false, false);
chessPieces.push(pawn1);
const pawn2 = new Chesspiece("pawn", "b2", "white", "1", false, false, false);
chessPieces.push(pawn2);
const pawn3 = new Chesspiece("pawn", "c2", "white", "1", false, false, false);
const pawn4 = new Chesspiece("pawn", "d2", "white", "1", false, false, false);
const pawn5 = new Chesspiece("pawn", "e2", "white", "1", false, false, false);
const pawn6 = new Chesspiece("pawn", "f2", "white", "1", false, false, false);
const pawn7 = new Chesspiece("pawn", "g2", "white", "1", false, false, false);
const pawn8 = new Chesspiece("pawn", "h2", "white", "1", false, false, false);
const pawn9 = new Chesspiece("pawn", "a7", "black", "1", false, false, false);
const pawn10 = new Chesspiece("pawn", "b7", "black", "1", false, false, false);
const pawn11 = new Chesspiece("pawn", "c7", "black", "1", false, false, false);
const pawn12 = new Chesspiece("pawn", "d7", "black", "1", false, false, false);
const pawn13 = new Chesspiece("pawn", "e7", "black", "1", false, false, false);
const pawn14 = new Chesspiece("pawn", "f7", "black", "1", false, false, false);
const pawn15 = new Chesspiece("pawn", "g7", "black", "1", false, false, false);
const pawn16 = new Chesspiece("pawn", "h7", "black", "1", false, false, false);

const bishop1 = new Chesspiece("bishop", "c1", "white", "1", false, false, false);
const bishop2 = new Chesspiece("bishop", "f1", "white", "1", false, false, false);
const bishop3 = new Chesspiece("bishop", "c8", "black", "1", false, false, false);
const bishop4 = new Chesspiece("bishop", "f8", "black", "1", false, false, false);

const queen1 = new Chesspiece("queen", "e1", "white", "1", false, false, false);
const queen2 = new Chesspiece("queen", "e8", "black", "1", false, false, false);

const king1 = new Chesspiece("king", "d1", "white", "1", false, false, false);
const king2 = new Chesspiece("king", "d8", "black", "1", false, false, false);

const knight1 = new Chesspiece("knight", "b1", "white", "1", false, false, false);
const knight2 = new Chesspiece("knight", "g1", "white", "1", false, false, false);
const knight3 = new Chesspiece("knight", "b8", "black", "1", false, false, false);
const knight4 = new Chesspiece("knight", "g8", "black", "1", false, false, false);

queen1.pos = "c5";

console.log(possiblePos(queen1));

function possiblePos(obj) {
    let possibleposition = [];

    if (obj.type == "queen") {
        let currentPosition = obj.pos;

        let letter = getColumn(currentPosition);
        let number = getRow(currentPosition);

        let newLetter = letter;
        let newNumber = true;
        while (newLetter != false && newNumber < 8) {
            newLetter = nextLetter(newLetter);
            newNumber = number++;
            console.log(newLetter + newNumber )
            possibleposition.push(newLetter + newNumber)
        }


        return possiblePositions;
    }
}

/* Gavin getRow and getColumn code */
function getColumn(str) {
    index = 0;
    return str.charAt(index);
}

function getRow(str) {
    index = 1;
    return str.charAt(index);
}
/* Trey checkForDead code*/
function checkForDead(objArr) {
    //console.log(objArr[2].isDead);
    let deadObjects = [];

    // iterate through the array of objects
    for( i = 0; i < objArr.length; i += 1) {
        // if its dead, add it to a new array called "deadObjects"
        if (objArr[i].isDead == true) {
            deadObjects.push(objArr[i]);
        }
    }
    return deadObjects;
}
/* Amanda letter increment*/
function nextLetter(lett) {
    if (lett == "a") {
        return "b";
    } else if (lett == "b") {
        return "c";
    } else if (lett == "c") {
        return "d";
    } else if (lett == "d") {
        return "e";
    } else if (lett == "e") {
        return "f";
    } else if (lett == "f") {
        return "g";
    } else if (lett == "g") {
        return "h";
    } else if (lett != "a" && lett != "b" && lett != "c" && lett != "d" && lett != "e" && lett != "f" && lett != "g") {
        return false;
    }
}

function prevLetter(lett) {
    if (lett == "h") {
        return "g";
    } else if (lett == "g") {
        return "f";
    } else if (lett == "f") {
        return "e";
    } else if (lett == "e") {
        return "d";
    } else if (lett == "d") {
        return "c";
    } else if (lett == "c") {
        return "b";
    } else if (lett == "b") {
        return "a";
    } else if (lett != "h" && lett != "g" && lett != "f" && lett != "e" && lett != "d" && lett != "c" && lett != "b") {
        return false;
    }
}
