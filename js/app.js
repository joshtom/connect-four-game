// Initializing a new Game Object
const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
    document.querySelector('#begin-game').document.addEventListener('click', () => {
          game.startGame();
          this.style.display = 'none';
          document.getElementById("play-area").style.opacity = '1';
      })

      /**
       * The app.js file is the interaction layer of our game: where the DOM meets the objects. This file is 
       * used to initialize the Game objects and listen for user-triggered events, like mouse clicks or 
       * keypresses.
       */