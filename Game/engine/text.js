import component from "./component.js";

class text extends component{
    constructor(parent, x, y, text, font){
        super(parent);
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
    }
}
export default text;