class Space {
    constructor(x, y, id, token){
        this.x = x;
        this.y = y;
        this.id = `-${x}-${y}`;
        this.token = null;
    }
}