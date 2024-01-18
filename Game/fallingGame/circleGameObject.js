import component from "../engine/component.js";
import gameObject from "../engine/gameObject.js";
import circleUpdateComponent from "./circleUpdateComponent.js"
import circle from "../engine/circle.js";
import circleDraw from "../engine/circleDraw.js";
import game from "../engine/game.js";

class circleGameObject extends gameObject{
    constructor(x,y){
        super();
        let sco = game.findByType("scoreText")[0];
        this.moveY = 2
        this.moveY = ((sco.score * .1)+1);
        this.moveY = this.moveY + (Math.floor((Math.random() * 100) + 1)/50)
        this.component.push(new circle(this, x, y, 25));
        this.component.push(new circleDraw(this, "red", "black"));
        this.component.push(new circleUpdateComponent(this))
    }
}
export default circleGameObject;