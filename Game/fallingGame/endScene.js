import scene from "../engine/scene.js";
import currentScore from "./HighScore/currentScore.js";
import currentScoreText from "./HighScore/currentScoreText.js";
import highScore from "./HighScore/highScore.js"
import highScore2 from "./HighScore/highScore2.js"
import highScore3 from "./HighScore/highScore3.js"
import highScoreText from "./HighScore/highScoreText.js"



class endScene extends scene{
    constructor(){
        super("End Scene");
    }

    start(){

        //Last score text
        this.gameObjects.push(new currentScoreText(this, (canvas.width/2) - 300, (canvas.height/2) - 100, 200,300));
        //Last Score
        this.gameObjects.push(new currentScore(this, canvas.width/2, canvas.height/2));

        //Last score text
        this.gameObjects.push(new highScoreText(this, (canvas.width/2) - 200, (canvas.height/2) + 100, 200,300));
        //Last Score
        this.gameObjects.push(new highScore(this, canvas.width/2 - 150, (canvas.height/2) + 200));
        this.gameObjects.push(new highScore2(this, canvas.width/2- 150, (canvas.height/2) + 300));
        this.gameObjects.push(new highScore3(this, canvas.width/2- 150, (canvas.height/2) + 400));

    }
}
export default endScene;