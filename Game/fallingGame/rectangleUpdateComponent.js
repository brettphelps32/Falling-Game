import component from "../engine/component.js";
import rectangleGameObject from "./rectangleGameObject.js";
import input from "../engine/input.js"
import constants from "./constants.js"
import time from "../engine/time.js"
import game from "../engine/game.js"
import scoreLives from "./ScoreBoardText/scoreLives.js";
import liveUpdate from "./ScoreBoardText/liveUpdate.js";

class rectangleUpdateComponent extends component{
    constructor(parent){
        super(parent);
        this.nextObject = 0;
        this.timeBetweenObject = 1;
    }

    update(){
        let liv = game.findByType("scoreLives")[0];
        let sco = game.findByType("scoreText")[0];
        let rectObj = game.findByType("rectangleGameObject")[0];
        let rect = this.parent.getComponent("RectangleObject")
        // rect.y = rect.y += rectObj.moveY;

        if(input.getMouseButtonDown(0) > 0){
            let screenPos = input.getMousePosition();
            if(rect.y <= screenPos.y){
                if((rect.y + 50) >= screenPos.y){
                    if(rect.x <= screenPos.x){
                        if((rect.x + 50) >= screenPos.x){
                            console.log("hit");
                            sco.score = 1 + sco.score;
                            this.parent.markForDelete = true
                        }
                    }  
                }
            }
        }
        
        if(rect.y > canvas.height-25){
            liv.lives -= 1;
            this.parent.markForDelete = true
        }
    }
}
export default rectangleUpdateComponent;