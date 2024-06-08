let currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AED"]; 
let rates = [];

function setup() {
  createCanvas(800, 400);
  generateRates();
}

function draw() {
  background(220);
  drawBarChart();
}

function generateRates() {
  
  for (let i = 0; i < currencies.length; i++) {

    if (currencies[i] !== "AED") {
      rates[i] = random(0.1, 10); 
    } else {

      rates[i] = 1;
    }
  }
}

function drawBarChart() {
  let barWidth = width / currencies.length;

  for (let i = 0; i < currencies.length; i++) {
    let x = i * barWidth;
    let y = map(rates[i], 0, 10, height, 0);
    let barHeight = height - y;

    fill(0, 0, 255);
    rect(x, y, barWidth, barHeight);

    fill(0);
    textAlign(CENTER);
    textSize(16);
    text(currencies[i], x + barWidth / 2, height - 10);

    fill(0);
    textAlign(CENTER);
    textSize(14);
    text(nf(rates[i], 0, 2), x + barWidth / 2, y - 5); 
  }
}
