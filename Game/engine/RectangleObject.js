import component from "./component.js"
class RectangleObject extends component{
    constructor(parent,x,y,w,h){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
export default RectangleObject;