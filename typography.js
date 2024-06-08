let myFont;

function preload() {
  myFont = loadFont("BlackOpsOne-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(myFont);
  textSize(20);
  fill(255);
  text("Welcome to Bath Spa University", 20, 200);
}
