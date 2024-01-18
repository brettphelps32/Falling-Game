import gameObject from "../../engine/gameObject";
import RectangleObject from "../../engine/RectangleObject.js"

class easy extends gameObject{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
        }

    start(){
        // this.component.push(new RectangleObject(this, canvas.height*.75, canvas.width*))
        }
}
export default easy;