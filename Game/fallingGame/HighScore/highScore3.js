import gameObject from "../../engine/gameObject.js";
import text from "../../engine/text.js";
import textDraw from "../../engine/textDraw.js";
import endSceneUpdate from "../endSceneUpdate.js";
import constants from "../constants.js";



class highScore3 extends gameObject{
    constructor(parent,x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
        
    }

    start(){
        //Draws Text
        this.component.push(new text(this, this.x,this.y, "3rd:  " +constants.score3 ,"100px sans"));
        this.component.push(new textDraw(this, "yellow", "white"));
        this.component.push(new endSceneUpdate(this));
    }
}
export default highScore3;