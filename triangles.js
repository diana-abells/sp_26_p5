/*
 * Title: Push Pop Rotate
 * Author: Diana Abells
 * Date:  SP 2026
 * Simple Description: random triangles rotated
 */

let looping = true;
function setup() {
  const c = createCanvas(400, 400);
  c.parent("p5");
  angleMode(DEGREES);
  rectMode(CENTER);
  background(220);
  //noLoop();
}

function draw() {
  push();
  let x = random(width);
  let y = random(height);
  translate(x, y);
  rotate(random(-45, 45));

  tri(0, 0, random(0.25, 1));
  pop();
	if (looping == true){
		loop();
	}else{noLoop();}
}

function tri(x, y, s) {
  noStroke();
  push();
  translate(x, y);
  scale(s);
  let r = random(0, 256);
  let g = random(0, 256);
  let b = random(0, 256);
  fill(r, g, b);
  triangle(-50, 0, 0, -100, 50, 0);
  pop();
}


function mousePressed(){
	if(looping === true){
		looping = false;
	}else{
      looping = true;
      redraw();
    }
}

function doubleClicked(){
  background(220);
  looping = true;
  redraw();
}