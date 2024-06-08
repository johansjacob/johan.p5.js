function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);

  // Car body
  fill(100, 50,175);
  rect(140, 100, 110, 40);

  // Wheels
  fill(100);
  ellipse(170, 140, 24, 24);
  ellipse(230, 140, 24, 24);
}
