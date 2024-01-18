import component from "../../engine/component.js";
import gameObject from "../../engine/gameObject.js"

class liveUpdate extends component{
    constructor(parent){
        super(parent);
    }

    update(){
        let liv = this.parent.getComponent("text");
        liv.text = "Lives: " + this.parent.lives;
    }

}
export default liveUpdate;