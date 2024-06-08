let dino;
let obstacles = [];
let score = 0;
let gameSpeed = 6;
let gameState = "title";

function setup() {
  createCanvas(800, 200);
}

function draw() {
  background(255);
  
  if (gameState === "title") {
    createTitleScreen();
  } else if (gameState === "playing") {
    // Generate obstacles
    if (frameCount % 60 === 0) {
      obstacles.push(new Obstacle());
    }

    // Update and display obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].update();
      obstacles[i].display();

      // Check for collision with dino
      if (dino.hits(obstacles[i])) {
        gameOver();
      }

      // Remove obstacles that have moved offscreen
      if (obstacles[i].offscreen()) {
        obstacles.splice(i, 1);
        score++;
      }
    }

    // Update and display dino
    dino.update();
    dino.display();

    // Display score
    textSize(20);
    fill(0);
    text("Score: " + score, width - 100, 30);
  } else if (gameState === "gameOver") {
    textSize(32);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
    text("Score: " + score, width / 2, height / 2 + 40);
  }
}

function createTitleScreen() {
  background(200);
  textSize(48);
  textAlign(CENTER);
  fill(0);
  text("Dino Game", width / 2, height / 2 - 30);

  // Draw a button-like shape
  fill(100);
  rect(width / 2 - 80, height / 2 + 20, 160, 60, 10);

  textSize(24);
  fill(255);
  text("Start", width / 2, height / 2 + 60);
}

function mousePressed() {
  if (gameState === "title" && mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 20 && mouseY < height / 2 + 80) {
    startGame();
  }
}

function startGame() {
  gameState = "playing";
  obstacles = [];
  dino = new Dino();
  score = 0;
}

function keyPressed() {
  if (gameState === "playing" && (keyCode === UP_ARROW || key === ' ')) {
    dino.jump();
  }
}

function gameOver() {
  gameState = "gameOver";
}

class Dino {
  constructor() {
    this.size = 30;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.6;
  }

  update() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;

    if (this.y >= height - this.size) {
      this.y = height - this.size;
      this.velocityY = 0;
    }
  }

  display() {
    fill(0);
    rect(this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -12;
    }
  }

  hits(obstacle) {
    let dinoRight = this.x + this.size;
    let dinoBottom = this.y + this.size;
    let obstacleRight = obstacle.x + obstacle.width;
    let obstacleBottom = obstacle.y + obstacle.height;

    return (
      dinoRight > obstacle.x &&
      this.x < obstacleRight &&
      dinoBottom > obstacle.y &&
      this.y < obstacleBottom
    );
  }
}

class Obstacle {
  constructor() {
    this.width = 20;
    this.height = 50;
    this.x = width;
    this.y = height - this.height;
    this.speed = gameSpeed;
  }

  update() {
    this.x -= this.speed;
  }

  display() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }

  offscreen() {
    return this.x + this.width < 0;
  }
}
