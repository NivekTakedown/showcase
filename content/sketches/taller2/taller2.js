let cam;
let j=0;
let i=0;
let k=0;
let img;
let carretera=0;
let myFont;
let array=[];
let movCar;
function preload() {
  mustang = loadModel('/showcase/sketches/taller2/assets/ford_mustan_gt1967.obj');
  img = loadImage('/showcase/sketches/taller2/assets/pexels-life-of-pix-8892.jpg');
  
}

function setup() {
  
  for (let a = 0; a < 10; a += 1) {
    array[a]=-1200*a;
  }
  createCanvas(710, 400, WEBGL);
  cam= createCamera();
  cam.move(0,-100,0);
  movCar=0;
}

function draw() {
  background(250);
  translate(0, 0, 0);
  normalMaterial();
  push();
  translate(k, 0,  j);
  rotateY(i-3.017);
  scale(50); 
  rotateX(9.5);
  //texture(img);
  model(mustang);
  //box(10);
  pop();
  translate(250, 0, 0);

  print('The value of x is ' +k);
  if (keyIsPressed === true&&keyCode === RIGHT_ARROW) {
    if(i>-0.5)
      i=i-0.1
    else
      i=-0.5
    if(k<200)
      k=k+5
    else{
      k=200
      i=0
    }
      
  }
  if (keyIsPressed === true&&keyCode === LEFT_ARROW) {
    if(i<0.5)
      i=i+0.1
    else
      i=0.5
    k=k-5
    if(k>-200)
      k=k-5
    else{
      k=-200
      i=0
    }
  }
  j=j-10
  cam.move(0,0,-10);
  push();

  rotateX(HALF_PI);
  texture(img);
  for (let a = 0; a < 10; a += 1) {
    push();
    translate(0,array[a]+movCar);
    plane(800,1200); 
    pop();
    if((frameCount%(60*15.3)==0)){
      movCar=-900+movCar;
    }
  }
  
  
  //translate(0,carretera);
  //carretera=carretera-1200*8
  pop();

}
