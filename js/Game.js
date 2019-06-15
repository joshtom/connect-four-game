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
    /**
     * Gets Game Ready to be played.
     */
    startGame(){
                    /** 
         * Initializes game. 
         */
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }
    /**
     * Returns active player
     * @return {Object} player - the active player
     */
    get activePlayer() {
        // Return player object whose active property is equals to true
        return this.players.find(player => player.active);
        
    }

    
    /**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */
    handleKeydown() {
        document.addEventListener('keydown', function(e) {
            if(this.ready = true){
                if(e.key === ArrowLeft){
                    // move Left
                } else if(e.key === ArrowRight){
                    // move Right
                } else if(e.key === ArrowDown){
                    // drop the token
                }
            }
        })
    }
}