import gameObject from "../../engine/gameObject.js";
import text from "../../engine/text.js";
import textDraw from "../../engine/textDraw.js";

class currentScoreText extends gameObject{
    constructor(parent, x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
    }

    start(){
        this.component.push(new text(this, this.x, this.y, "Your Last Score:", "100px sans"));
        this.component.push(new textDraw(this, "gray", "white"));

    }
}
export default currentScoreText;