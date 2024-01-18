import gameObject from "../engine/gameObject.js"
import text from "../engine/text.js"
import textDraw from "../engine/textDraw.js"
import startUpdateComponent from "./StartUpdateComponent.js"

class startGameObjectDef extends gameObject{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start(){
        this.component.push(new text(this, this.x, this.y, "Click Rectangles, leave the Circles", "75px sans"));
        this.component.push(new textDraw(this, "gray", "white"));
        this.component.push(new startUpdateComponent(this))
    }
}
export default startGameObjectDef;