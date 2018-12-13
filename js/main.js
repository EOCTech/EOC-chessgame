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

const piece1 = new Chesspiece("rook", "A1", "black", "1", false, false, false)
const piece2 = new Chesspiece("pawn", "A1", "black", "1", false, false, false)
const piece3 = new Chesspiece("bishop", "A1", "black", "1", false, false, false)
const piece4 = new Chesspiece("queen", "A1", "black", "1", false, false, false)
const piece5 = new Chesspiece("king", "A1", "black", "1", false, false, false)
const piece6 = new Chesspiece("knight", "A1", "black", "1", false, false, false)

