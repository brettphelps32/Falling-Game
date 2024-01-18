import gameObject from "../../engine/gameObject.js";
import text from "../../engine/text.js";
import textDraw from "../../engine/textDraw.js";
import scoreUpdate from "./scoreUpdate.js";

class scoreText extends gameObject{
    constructor(parent){
        super(parent);
        this.score = 0
        
        this.component.push(new text(this, 50, 60, "Score: " + this.score, "50px Times Roman"))
        this.component.push(new textDraw (this, "black", "white"));
        this.component.push(new scoreUpdate(this));
    }
}
export default scoreText;