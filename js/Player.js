 // The property below holds players information
    //  name of the player - name
    // color the player uses - color
    // id of the player - id
    // tokens is use to check the behavior of the player i.e moving up, down, left or right in the game
class Player {
    constructor (name, color, id, active = false){
    this.name = name;
    this.color = color;
    this.id = id;
    this.active = active;
    this.tokens = this.createTokens(21);
}

/**
 * Creates token objects for player
 * @param     {Integer  }    num - Number of token objects to be created
 * @returns   {Array}     An array of the newly created token objects
 */
createTokens(num) {
    const tokens = [];

    for(let i = 0; i < num; i++ ){
        let token = new Token(i, this);
        tokens.push(token);
    }
    return tokens;
}
}

