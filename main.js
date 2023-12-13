//Animation Intro

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// //Global Variables
// let rectX = 100;
// let rectSize = 80;

// requestAnimationFrame(loop);
// function loop() {
//   //Update variables
//   rectX = Math.random();

//   //Draw bg
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   //Draw a square
//   ctx.fillStyle = "orange";
//   ctx.fillRect(rectX, 150, rectSize, rectSize);

//   requestAnimationFrame(loop);
// }

// //Animation basics
// let x = 100;

// requestAnimationFrame(draw);
// function draw() {
//   //Update elements on canvas
//   x++;

//   //Draw canvas
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height); //Bg

//   ctx.fillStyle = "green";
//   ctx.fillRect(x, 100, 50, 50); //Rectangle

//   requestAnimationFrame(draw);
// }

// //Run animation till a certain value/updating the variable
// requestAnimationFrame(draw);
// function draw() {
//   if (x < 400) {
//     x++;
//   }

//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height); //Bg

//   ctx.fillStyle = "green";
//   ctx.fillRect(x, 100, 50, 50); //Rectangle

//   requestAnimationFrame(draw);
// }

// //Running animation for a certain amount of time

// let a = 100;
// let frameCount = 0;

// requestAnimationFrame(draw);
// function draw() {
//   frameCount++;

//   if (frameCount < 120) {
//     a++;
//   }

//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height); //Bg

//   ctx.fillStyle = "green";
//   ctx.fillRect(a, 100, 50, 50); //rect

//   requestAnimationFrame(draw);
// }

// //Reset animation

// let b = 100;

// requestAnimationFrame(animate);
// function animate() {
//   b++;

//   if (b > 300) {
//     b = 100;
//   }

//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   ctx.fillStyle = "green";
//   ctx.fillRect(b, 100, 50, 50);

//   requestAnimationFrame(animate);
// }

// //MOUSE & KEYBOARD INPUT

//OR

//Global Variables
let rectX = 100;
let rectSize = 80;
let rectBlue = 225;
let rectRed = 0;

//let spaceKeyIsPressed = false;
let animate = false;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Update Variables
  //if (spaceKeyIsPressed) {
  if (animate) {
    rectX += 1;
    rectSize += Math.random() * 2 - 1; //-1 to 1
    rectBlue--;
    rectRed++;
  }
  //Draw bg
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a square
  ctx.fillStyle = "rgb(" + rectRed + ", 0," + rectBlue + ")";
  ctx.fillRect(rectX, 150, rectSize, rectSize);

  requestAnimationFrame(loop);
}

//EVENT STUFF

// // Click and hold mouse to animate
// document.addEventListener("mousedown", mouseDownHandler);
// document.addEventListener("mouseup", mouseUpHandler);

// function mouseDownHandler() {
//   mouseIsPressed = true;
// }
// function mouseUpHandler() {
//   mouseIsPressed = false;
// }

// // Click to start and click to stop animation

document.addEventListener("click", mouseClickHandler);

function mouseClickHandler() {
  if (animate) {
    animate = false;
  } else {
    animate = true;
  }
}

// OR

document.addEventListener("keydown", keyDownHandler);

function keyDownHandler() {
  animate = !animate;
}

// //Click any key to start and stop animation

// document.addEventListener("keydown", keyDownHandler);

// function keyDownHandler(event) {
//   console.log(event.code);
//    animate = !animate;
//   }
// }

// //Use a special key (ex. space key)

// document.addEventListener("keydown", keyDownHandler);

// function keyDownHandler(event) {
//   console.log(event.code);
//   if (event.code == "Space") {
//     animate = !animate;
//   }
// }

// //Click and hold key to

// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

// function keyDownHandler(event) {
//   if (event.code == "Space") {
//     spaceKeyIsPressed = true;
//   }
// }

// function keyUpHandler(event) {
//   if (event.code == "Space") {
//     spaceKeyIsPressed = false;
//   }
// }
