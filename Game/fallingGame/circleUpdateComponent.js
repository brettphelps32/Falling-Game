import component from "../engine/component.js";
import constants from "./constants.js";
import game from "../engine/game.js";
import input from "../engine/input.js";

class circleUpdatecomponent extends component{
    constructor(parent){
        super(parent);
        this.nextObject = 0;
        this.timeBetweenObject = 1;
    }

    update(){
        let sco = game.findByType("scoreText")[0];
        let liv = game.findByType("scoreLives")[0];
        let cir = this.parent.getComponent("circle");
        // cir.y = cir.y += constants.movey;


        
        if(input.getMouseButtonDown(0) > 0){
            let screenPos = input.getMousePosition();
            if((cir.y - 25) <= screenPos.y){
                if((cir.y + 25) >= screenPos.y){
                    if((cir.x - 25) <= screenPos.x){
                        if((cir.x + 25) >= screenPos.x){
                            console.log("hit");
                            liv.lives = liv.lives - 1;
                            this.parent.markForDelete = true
                        }
                    }  
                }
            }
        }



        if(cir.y > canvas.height-20){
            this.parent.markForDelete = true
            sco.score = sco.score + 1;
        }
    }
}
export default circleUpdatecomponent;