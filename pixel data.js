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

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0); // to show the entire image

var c = get(x, y); // get mouse position

fill(c);

ellipse (x, y, 100, 100);

}
