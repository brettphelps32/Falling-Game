import gameObject from "../engine/gameObject.js"
import text from "../engine/text.js"
import textDraw from "../engine/textDraw.js"
import startUpdateComponent from "./StartUpdateComponent.js"

class startGameObject extends gameObject{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start(){
        this.component.push(new text(this, this.x, this.y, "Falling Game", "100px sans"));
        this.component.push(new textDraw(this, "orange", "white"));
        this.component.push(new startUpdateComponent(this))
    }
}
export default startGameObject;