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
        const players = [ new Player('player 1', ' #e15258', 1, true),
                          new Player('player 2', '#e59a13', 2)];
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
    handleKeydown(e) {
            if(this.ready){
                if(e.key === "ArrowLeft"){
                    this.activePlayer.activeToken.moveLeft();
                } else if(e.key === "ArrowRight"){
                    this.activePlayer.activeToken.moveRight(this.board.columns);
                } else if(e.key === "ArrowDown"){
                    this.playToken();
                }
            }
        
    }

        /**
     * Finds Space object to drop Token into, drops Token
     */
    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for(let space of targetColumn){
            if(space.token === null) {
                targetSpace = space;
            }
    }
    if (targetSpace !== null) {
        const game = this;
        game.ready = false;
        activeToken.drop(targetSpace, function(){
            game.updateGameState(activeToken, targetSpace);
        });
    }
}
    /** 
 * Checks if there a winner on the board after each token drop.
 * @param   {Object}    Targeted space for dropped token.
 * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
 */
    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;

        // Checking if the Disc is aligned Vetically
        for( let x = 0; x < this.board.columns; x++ ) {
            for( let y = 0; y < this.board.rows - 3; y++ ) {
                console.log(x,y);
				console.log(y+1);
				console.log(y+2);
				console.log(y+3);
                if(this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y+1].owner === owner &&
                    this.board.spaces[x][y+2].owner === owner &&
                    this.board.spaces[x][y+3].owner === owner){
                        win = true;
                        console.log(win);
                }
            }
        }

         // Checking if the Disc is aligned Horizontallu
         for( let x = 0; x < this.board.columns - 3; x++ ) {
            for( let y = 0; y < this.board.rows; y++ ) {
                if(this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x+1][y].owner === owner &&
                    this.board.spaces[x+2][y].owner === owner &&
                    this.board.spaces[x+3][y].owner === owner){
                        win = true;
                }
            }
        }

        // Checking if the Disc is aligned Diagonally
        for( let x = 0; x < this.board.columns; x++ ) {
            for( let y = 0; y < this.board.rows - 3; y++ ) {
                if(this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x-1][y+1].owner === owner &&
                    this.board.spaces[x-2][y+2].owner === owner &&
                    this.board.spaces[x-3][y+3].owner === owner){
                        win = true;
                }
            }
        }

        // Checking if the Disc is aligned Diagonally
        for( let x = 0; x < this.board.columns; x++ ) {
            for( let y = 0; y < this.board.rows - 3; y++ ) {
                if(this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x-1][y-1].owner === owner &&
                    this.board.spaces[x-2][y-2].owner === owner &&
                    this.board.spaces[x-3][y-3].owner === owner){
                        win = true;
                }
            }
        }

        return win;

    }

        /** 
     * Switches active player. 
     */
    switchPlayers() {
        for( let player of this.players ) {
            player.active = player.active === true ? false : true;
        }
    }

        /** 
     * Displays game over message. 
     * @param {string} message - Game over message.      
     */
    gameOver(message) {
        document.querySelector('game-over').style.display = 'block';
        document.querySelector('game-over').textContent = this.message;
    }

        /** 
     * Updates game state after token is dropped. 
     * @param   {Object}  token  -  The token that's being dropped.
     * @param   {Object}  target -  Targeted space for dropped token.
     */
    updateGameState(token, target) {
        target.mark(token);

        if (!this.checkForWin(target)){
            console.log('No win');
            this.switchPlayers();
            if(this.activePlayer.checkTokens()){
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver('No more Tokens')
            }
        } else{
            console.log('Win');
            this.gameOver(`Congratulation ${target.owner.name} wins!`);
        }

    }

}