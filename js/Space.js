class Space {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = 38;
    }
    drawSvgSpace(){
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        /**
         * Then, using a DOM method called setAttributeNS(), we'll set several attributes to the element stored 
         * in the svgSpace variable, using the following code:
         */
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");
        /**
         * Finally, the completed svgSpace element will be attached to the DOM using the following code:
         */
        document.getElementById("mask").appendChild(svgSpace);   
    }
}