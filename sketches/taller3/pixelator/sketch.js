let imgShader;
let resolution;
let img1; let img2; let img3; let img4; let img5;

let tab; //menu de seleccion
let selec;

function pickEvent() {
    selec = tab.value();    
    if (selec === '-anya') {
        selec = 1;
    } else if (selec === '-goku') {
        selec = 2;
    } else if (selec === '-naruto') {
        selec = 3;
    } else if (selec === '-konosuba') {
        selec = 4;
    } else if (selec === '-shawson') {
        selec = 5;
    } 
}

function preload(){
  imgShader = loadShader('/showcase/sketches/taller3/pixelator/effect.vert', '/showcase/sketches/taller3/pixelator/effect.frag');
  img1 = loadImage("/showcase/sketches/taller3/pixelator/anya.jpg");
  img2 = loadImage("/showcase/sketches/taller3/pixelator/goku.jpg");
  img3 = loadImage("/showcase/sketches/taller3/pixelator/naruto.jpg");
  img4 = loadImage("/showcase/sketches/taller3/pixelator/konosuba.jpg");
  img5 = loadImage("/showcase/sketches/taller3/pixelator/shawson.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);  
  textureMode(NORMAL);
  tab= createSelect();
  tab.position(10, 10);
  tab.option('Pixel');
  tab.option('-anya');
  tab.option('-goku');
  tab.option('-konosuba');
  tab.option('-naruto');
  tab.option('-shawson');
  tab.changed(pickEvent);
  noStroke();
  shader(imgShader);
  resolution = createSlider(1, 300, 20, 1);
  resolution.position(10, 35);
  resolution.style('width', '80px');
  resolution.input(() => imgShader.setUniform('resolution', resolution.value()));
}

function draw() {  
  if (selec == 1){
    imgShader.setUniform('tex0', img1);
  } else if (selec == 2){
    imgShader.setUniform('tex0', img2);
  } else if (selec == 3){
    imgShader.setUniform('tex0', img3);
  } else if (selec == 4){
    imgShader.setUniform('tex0', img4);
  } else if (selec == 5){
    imgShader.setUniform('tex0', img5);
  }

  imgShader.setUniform('tiles', float(resolution.value()));

  rect(0,0,width, height);
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}