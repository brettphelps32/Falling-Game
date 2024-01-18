import component from "../../engine/component.js"
class scoreUpdate extends component{
    constructor(parent){
        super(parent);
    }

    update(){
        let sco = this.parent.getComponent("text");
        sco.text = "Score: " + this.parent.score;

    }
}
export default scoreUpdate;