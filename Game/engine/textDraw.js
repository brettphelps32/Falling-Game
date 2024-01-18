import component from "./component.js";
class textDraw extends component{
    constructor(parent, fillStyle, strokeStyle)
    {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }
    draw(ctx){
        let text = this.parent.getComponent("text");

        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.font = text.font;
        ctx.fillText(text.text, text.x, text.y);
        ctx.strokeText(text.text, text.x, text.y);
    }
}
export default textDraw;