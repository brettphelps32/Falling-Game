import component from "./component.js";

class circleDraw extends component{
    constructor(parent, fillStyle, strokeStyle){
        super(parent);
        this.fillstyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }

    draw(ctx){
        let cir = this.parent.getComponent("circle");

        //Fix?
        ctx.fillStyle = "red";
        ctx.strokeStyle = this.strokeStyle;

        ctx.beginPath();
        ctx.arc(
            cir.x,
            cir.y,
            cir.r,
            0,Math.PI*2
        )
        ctx.fill();
        ctx.stroke();
    }
}
export default circleDraw;