function getCanvas() {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return { canvas, ctx };
  }
function getHeight(){
  let { canvas, ctx } = getCanvas();
  return canvas.height;
}
function getWidth(){
  let { canvas, ctx } = getCanvas();
  return canvas.width;
}

export {getCanvas}