import component from "./component.js"
class rectangleObjectDraw extends component{
   constructor(parent, fillStyle, strokeStyle){
       super(parent);
       this.fillStyle = fillStyle;
       this.strokeStyle = strokeStyle;
   } 

   draw(ctx){
       let rect = this.parent.getComponent("RectangleObject");

       ctx.fillStyle = this.fillStyle;
       ctx.strokeStyle = this.strokeStyle;

       ctx.beginPath();
           ctx.rect(
               rect.x,
               rect.y,
               rect.w,
               rect.h,
           )
           ctx.fill();
           ctx.stroke();
       }

   }
export default rectangleObjectDraw;