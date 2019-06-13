 // The property below holds players information
    //  name of the player - name
    // color the player uses - color
    // id of the player - id
    // tokens is use to check the behavior of the player i.e moving up, down, left or right in the game
class Player {
    constructor (name, color, id, tokens = false){
    this.name = name;
    this.color = color;
    this.id = id;
    this.tokens = [];
}
}