function setup() {
  createCanvas(800,600);
  canvas.position(windowWidth/2 - width/2, windowHeight/2 - height/2);

}

function draw() {
  //background(220);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
