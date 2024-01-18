import gameObject from "../../engine/gameObject.js";
import text from "../../engine/text.js"
import textDraw from "../../engine/textDraw.js";

class nameText extends gameObject{
    constructor(parent){
        super(parent);

        this.component.push(new text(this, (canvas.width/2) - 200, 60, "Falling Game", "50px Times Roman"))
        this.component.push(new textDraw (this, "black", "white"));
    }
}
export default nameText;