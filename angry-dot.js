/*
 * Title: Distance Function Example
 * Author: Diana Abells
 * Date:  AU 2025
 * Simple Description: Using the dist() the circle becomes a roll over button
 * Instructions: Roll over the circle, see it's color change to red.  Clicking on the area of the circle brings up the angry emoji.
 * emoji pop up element from:  https://happycoding.io/tutorials/p5js/input/grouchy-face
 */


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(144);
  noStroke();

  let xPos = width / 2; //circle x position
  let yPos = height / 2; //circle y position
  let d = 100;

  //Use the distance function in a conditional to change the fill of the circle when the mouse is over the circle.

  if (dist(mouseX, mouseY, xPos, yPos) < d / 2) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  ellipse(xPos, yPos, d);

  if (mouseIsPressed && dist(mouseX, mouseY, xPos, yPos) < d / 2) {
    //background(random(64, 255), 0, 0);
    text("😠", width / 2 + random(-10, 10), height / 2 + random(-10, 10));
  }
}
