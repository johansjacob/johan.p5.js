function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);


  let distance = dist(mouseX, mouseY, width / 2, height / 2);


  let newSize = map(distance, 0, width / 2, 12, 64);
  let newColor = map(distance, 0, width / 2, 0, 255);

  textSize(newSize);
  fill(255, newColor, 0);

  text("Welcome to Bath Spa University", width / 2, height / 2);
}
