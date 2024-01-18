import component from "./component.js";
class circle extends component{
    constructor(parent, x, y, r){
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
export default circle;