import scene from "../engine/scene.js";
import rectangleGameObject from "./rectangleGameObject.js";
import circleGameObject from "./circleGameObject.js"
import constants from "./constants.js";
import scoreText from "./ScoreBoardText/scoreText.js";
import scoreBoard from "./scoreBoard.js";
import nameText from "./ScoreBoardText/nameText.js"
import scoreLives from "./ScoreBoardText/scoreLives.js";
import mainSceneUpdate from "./mainSceneUpdate.js";




class mainScene extends scene{
    constructor(){
        super("Main Falling Game");
    }

    start(){
        //Score Board
        this.gameObjects.push(new scoreBoard(0,0,canvas.width,100));
        this.gameObjects.push(new scoreText(this));
        this.gameObjects.push(new nameText(this));
        this.gameObjects.push(new scoreLives(this));

        this.gameObjects.push(new rectangleGameObject(Math.floor((Math.random() * canvas.width) + 1), constants.StartY));
        
        this.gameObjects.push(new circleGameObject(Math.floor((Math.random() * canvas.width) + 1), constants.StartY+ 25));
        this.gameObjects.push(new mainSceneUpdate(this));
    }
}
export default mainScene;