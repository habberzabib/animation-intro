//Animation Intro

//Setup Cana=vas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let rectX = 100;
let rectSize = 80;

requestAnimationFrame(loop);
function loop() {
  //Update variables
  rectX = Math.random();

  //Draw bg
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a square
  ctx.fillStyle = "orange";
  ctx.fillRect(rectX, 150, rectSize, rectSize);

  requestAnimationFrame(loop);
}
