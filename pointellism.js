function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


var img, x, y;

function preload() {

img = loadImage("5.jpg");

}



function setup() {

createCanvas (400, 400);

background(0);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 50);

ellipse (x, y, 30, 30);

}
