import scene from "../engine/scene.js"
import text from "../engine/text.js"
import textDraw from "../engine/textDraw.js"
import startGameObject from "./startGameObject.js"
import startGameObjectDef from "./startGameObjectDef.js"


class startScene extends scene{
    constructor(){
        super("Main Scene");
    }
    start(){
        this.gameObjects.push(new startGameObject(canvas.width/2 - 300, canvas.height/2))
        this.gameObjects.push(new startGameObjectDef(canvas.width/2 - 550, canvas.height/2 + 100))
    }
}
export default startScene;