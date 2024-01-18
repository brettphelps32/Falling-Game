import component from "../engine/component.js";
import time from "../engine/time.js";
import circleGameObject from "./circleGameObject.js";
import rectangleGameObject from "./rectangleGameObject.js";
import constants from "./constants.js";
import game from "../engine/game.js";
import gameObject from "../engine/gameObject.js";
import RectangleObject from "../engine/RectangleObject.js";

class mainSceneUpdate extends gameObject{
    
    constructor(parent){
        super(parent);
        this.nextObject = 0;
        this.timeBetweenObject = 1;
        this.rand = 0;
        this.levelUp = false;
        this.timeLevelUp = 0;
        this.setLevelUp = 5
    }

    update(){
        this.nextObject += time.secondsBetweenFrame
        let sco = game.findByType("scoreText")[0];
        if(this.nextObject >= this.timeBetweenObject){
            this.rand = Math.floor((Math.random() * 70000) + 1);
            if(this.rand > 5){
                let x = Math.floor((Math.random() * (canvas.width - 50)) + 1);
                let go = new circleGameObject(x, constants.StartY + 25);
                game.instantiate(go);
                this.nextObject = 0;
            }
            else{
                let x = Math.floor((Math.random() * (canvas.width - 50)) + 1);
                let go = new rectangleGameObject(x, constants.StartY);
                game.instantiate(go);
                this.nextObject = 0;
            }
        }

        this.timeLevelUp += time.secondsBetweenFrame;
        if(this.timeLevelUp >= this.setLevelUp){
            this.timeBetweenObject = this.timeBetweenObject - .05;
            this.levelUp = true;
            this.timeLevelUp = 0;
        }

        



        let rectObj = game.findByType("rectangleGameObject");
        let i = 0;
        for(let currentCube of rectObj){
            let rect = rectObj[i].getComponent("RectangleObject")
            rect.y = rect.y + currentCube.moveY;
            i++;
        }

        let cirObj = game.findByType("circleGameObject");
        i = 0;
        for(let currentCir of cirObj){
            let cir = cirObj[i].getComponent("circle")
            cir.y = cir.y + currentCir.moveY;
            i++;
        }



        //Update Highscore
        

        //Change scene
        let liv = game.findByType("scoreLives")[0];
        if(liv.lives <= 0){
            constants.score = sco.score;

            if(sco.score > constants.score1){
                constants.score3 = constants.score2;
                constants.score2 = constants.score1;
                constants.score1 = sco.score;
            }
            else if (sco.score > constants.score2){
                constants.score3 = constants.score2;
                constants.score2 = sco.score; 
            }
            else if (sco.score > constants.score3){
                constants.score3 = sco.score;
            }



            game.changeScene(2);
        }


    }
}
export default mainSceneUpdate;