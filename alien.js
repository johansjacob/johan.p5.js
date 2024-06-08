function setup() {
  createCanvas(200, 200);
  background(0);
  
   
  fill(255); // White color
  for (let i = 0; i < 100; i++) {
    let x = random(width); 
    let y = random(height); 
    ellipse(x, y, 2, 2); // Small star
  }
  

 
  fill(0, 255, 0);
  ellipse(100, 120, 120, 120);

  
  fill(255);
  ellipse(100, 90, 80, 80);


  fill(0);
  ellipse(100, 95, 40, 40);


  noFill();
  stroke(0);
  arc(100, 145, 60, 40, 0, PI);


}
