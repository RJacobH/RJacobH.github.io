let branches = 3;
let decrease = 0.66;
let minimum_size = 20;
let max_leaves = 500;
let current_leaves = 0;

let theta;
let y_rot = 0.0;
let a = 0.3;
let b = -0.1;
let c = 0.7;
let aincrement = 0.01;
let bincrement = 0.03;
let cincrement = 0.07;

function setup() {
  createCanvas(1000, 750, WEBGL);
  //ortho();
}

function draw() {
  camera();
  background(255);
  frameRate(60);
  stroke(0);
  let a = 2 * (mouseX / width) * 90;
  theta = radians(a);
  let cx = 0;
  let cy = height / 2 - 80;
  translate(cx, cy, 0);
  let L = ((height - mouseY) / height) * height/2;
  
  rotateY(y_rot);
  if (mouseIsPressed) {
    y_rot += PI/64;
    if (y_rot > 2*PI) {
      y_rot = 0.0;
    }
  }
  
  a += aincrement;
  if (a > 1) {
    a = -1;
  }
  b += bincrement;
  if (b > 1) {
    b = -1.0;
  }
  c += cincrement;
  if (c > 1) {
    c = -1.0;
  }
  
  line(0, 0, 0, 0, -L, 0);
  translate(0, -L, 0);
  branch(L);
}


function branch(h) {
  h *= decrease;
  
  if (h > minimum_size){
    for (let i = 0; i < branches; i++) {
      push();
      rotate(theta);
      line(0, 0, 0, 0, -h, 0);
      translate(0, -h, 0);
      branch(h);
      pop();
      rotateY(2*PI/branches);
    }
  } else {
    leaf();
  }
}

function calc(v) {
  return noise((sin((v+1)*PI)+1)/2)*255;
}

function leaf() {
  if (current_leaves < max_leaves) {
    fill(0);
    if (Math.random() > 0.995) {
      fill(255);
    }
    box(5);
    current_leaves++;
  }


}
