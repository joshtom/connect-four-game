class Game{
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;

    }

    /**
     * Creates two player Objects
     * @return {array} An array of two player objects
     */
    createPlayers(){
        // const player1 = new Player('player 1', ' #e15258', 1, 'true');
        // const player2 = new Player('player 2', '#e59a13', 2);
        // Refactor and convert into array
        const players = [
            new Player('player 1', ' #e15258', 1, true),
            new Player('player 2', '#e59a13', 2)
        ]
        return players;
    }
}