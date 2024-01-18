import gameObject from "../../engine/gameObject.js";
import text from "../../engine/text.js";
import textDraw from "../../engine/textDraw.js";
import liveUpdate from "./liveUpdate.js"

class scoreLives extends gameObject{
    constructor(parent){
        super(parent);
        this.lives = 3

        this.component.push(new text(this, canvas.width * .8, 60, "Lives: " + this.lives, "50px Times Roman"))
        this.component.push(new textDraw (this, "black", "white"));
        this.component.push(new liveUpdate(this));
    }
}
export default scoreLives;