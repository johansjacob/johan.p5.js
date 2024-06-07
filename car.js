function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  // Car body
  fill(255, 0, 0);
  rect(150, 100, 100, 40);

  // Wheels
  fill(100);
  ellipse(170, 140, 24, 24);
  ellipse(230, 140, 24, 24);
}
