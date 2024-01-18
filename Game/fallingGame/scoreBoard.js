import gameObject from "../engine/gameObject.js";
import RectangleObject from "../engine/RectangleObject.js";
import rectangleObjectDraw from "../engine/rectanleObjectDraw.js";

class scoreBoard extends gameObject{
    constructor(x,y,w,h){
        super();
        //Draw Bar
        this.component.push(new RectangleObject(this, x, y, w, h));
        this.component.push(new rectangleObjectDraw(this,"gray", "black"));
    }
}
export default scoreBoard;