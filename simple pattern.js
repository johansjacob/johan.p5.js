let rez = 0.02;
let t = 0;

function setup() {
  createCanvas(600,600);
  noLoop();
}

function draw() {
  background(255);
  space = 20;
  size = 20;

  for (i = 0; i < width; i += space) {
    for (j = 0; j < height; j += space) {
      n = noise(i * rez, j * rez, t);
      //n = random(1);
      //stroke(n*255,n*255,n*255,255);
      stroke(0);
      //fill(n*255,n*255,n*255,255);
      strokeWeight(3);
      if (n < 0.5) {
        line(i, j, i + size, j + size);
      } else {
        line(i + size, j, i, j + size);
      }
    }
    t += 0.02;
  }
}


