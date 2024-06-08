let img;

function preload(){
  img=loadImage("5.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.circle(100,100,190);
  //cnv7.triangle(0,0,100,200,200,0);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0); //positioning the image 
  image(cnv7,350,225); 
  

  img.resize(200,200); // resizing the sunflower image 
  let cnv5 = createGraphics(200,200); // creating a sub canvas
  
  cnv5.rect(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25); // putting the sub canvas inside the main canvas 
  
 
  


}


