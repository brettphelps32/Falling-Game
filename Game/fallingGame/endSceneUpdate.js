import component from "../engine/component.js";
import game from "../engine/game.js"
import time from "../engine/time.js"

class endSceneUpdate extends component{
    constructor(parent){
        super(parent)
        this.time = 0;
    }
    update(){
        this.time+= time.secondsBetweenFrame;
        if(this.time > 3){
            game.changeScene(0);
        }
    }
}
export default endSceneUpdate