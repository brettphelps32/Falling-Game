import component from "../engine/component.js";
import game from "../engine/game.js"
import time from "../engine/time.js"

class startUpdateComponent extends component{
    constructor(parent){
        super(parent)
        this.time = 0;
    }
    update(){
        this.time+= time.secondsBetweenFrame;
        if(this.time > .1){
            game.changeScene(1);
        }
    }
}
export default startUpdateComponent