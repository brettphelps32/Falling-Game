import component from "../engine/component.js";
import gameObject from "../engine/gameObject.js";
import rectangleUpdateComponent from "./rectangleUpdateComponent.js";
import RectangleObject from "../engine/RectangleObject.js";
import rectangleObjectDraw from "../engine/rectanleObjectDraw.js";
import game from "../engine/game.js";

class rectangleGameObject extends gameObject{
    constructor(x,y)
    {
        super();
        let sco = game.findByType("scoreText")[0];
        this.moveY = 2
        this.moveY = ((sco.score * .1)+1);
        this.moveY = this.moveY + (Math.floor((Math.random() * 100) + 1)/50)
        this.component.push(new RectangleObject(this, x, y, 50, 50));
        this.component.push(new rectangleObjectDraw(this, "blue", "black"));
        this.component.push(new rectangleUpdateComponent(this)); 
    }
}
export default rectangleGameObject;