var masterColor = {r: 0,g: 0,b: 0,h: 0,s: 0,v: 0,hs: 0,ss:0 ,l:0};

//toma de datos rgb
let rSlider, gSlider, bSlider;
let inpR, inpG, inpB;

//variables hsb
var hType = 0;
var max = {colour: "-",value: 0};
var min = {colour: "-",value: 0};

function setup() {
  //background(50); //no funciona (╥_╥)
  createCanvas(800, 600);
  setUpRGBpicker(0, 0); 
}

function draw() {
  drawRGBpicker(0, 0);
  drawHSVpicker(200, 0);
  drawHSLpicker(400,0);
  calHSV();
}

function setUpRGBpicker(x, y) {
  rSlider = createSlider(0, 255, random(255));
  rSlider.position(x + 15, y + 200);
  gSlider = createSlider(0, 255, random(255));
  gSlider.position(x + 15, y + 230);
  bSlider = createSlider(0, 255, random(255));
  bSlider.position(x + 15, y + 260);

  inpR = createInput(rSlider.value(), "number");
  inpR.position(x + 150, y + 200);
  inpR.size(40, 20);

  inpG = createInput(gSlider.value(), "number");
  inpG.position(x + 150, y + 230);
  inpG.size(40, 20);

  inpB = createInput(bSlider.value(), "number");
  inpB.position(x + 150, y + 260);
  inpB.size(40, 20);

  rSlider.input(valueUpdate.bind(null, inpR, rSlider));
  inpR.input(valueUpdate.bind(null, rSlider, inpR));

  gSlider.input(valueUpdate.bind(null, inpG, gSlider));
  inpG.input(valueUpdate.bind(null, gSlider, inpG));

  bSlider.input(valueUpdate.bind(null, inpB, bSlider));
  inpB.input(valueUpdate.bind(null, bSlider, inpB));
}

function drawRGBpicker(x, y) {

  colorMode(RGB, 255);
  noStroke();
  fill(rSlider.value(), gSlider.value(), bSlider.value());
  rect(x + 20, y + 20, 160, 160);
  //color de las filas
  fill(255, 0, 0);
  rect(rSlider.x, rSlider.y, rSlider.width + 5, rSlider.height + 5);
  fill(0, 255, 0);
  rect(gSlider.x, gSlider.y, gSlider.width + 5, gSlider.height + 5);
  fill(0, 0, 255);
  rect(bSlider.x, bSlider.y, bSlider.width + 5, bSlider.height + 5);
  //

  masterColor.r = map(rSlider.value(), 0, 255, 0, 1);
  masterColor.g = map(gSlider.value(), 0, 255, 0, 1);
  masterColor.b = map(bSlider.value(), 0, 255, 0, 1);

}

function drawHSVpicker(x, y) {
  colorMode(HSB, 100);
	map(masterColor.s,0,1,0,100)
  fill(map(masterColor.h,0,1,0,360), map(masterColor.s,0,1,0,100), map(masterColor.v,0,1,0,100));
  rect(x + 20, y + 20, 160, 160);
}

function drawHSLpicker(x,y){
  //colorMode(HSL, 100);
  let c = color(masterColor.r, masterColor.g, masterColor.b);
  masterColor.hs = floor( hue(c) );
  masterColor.ss = saturation(c);
  masterColor.l = lightness(c);  
  console.log(masterColor);
  fill( `hsl(${ map(masterColor.hs,0,1,0,360) }, ${map(masterColor.ss,0,1,0,100) }%, ${map(masterColor.l,0,1,0,100)}%)` );
  rect(x+20,y+20,160,160);
}

function calHSV() {
  masterColor.s = (maxRGB() - minRGB()) / maxRGB();
  if (isNaN(masterColor.s)) {
    masterColor.s = 0;
  }
  masterColor.v = maxRGB();
  
  var dr = (maxRGB() - masterColor.r) /
    maxRGB() - minRGB();

  var dg = (maxRGB() - masterColor.g) /
    maxRGB() - minRGB();

  var db = (maxRGB() - masterColor.b) /
    maxRGB() - minRGB();

  if (masterColor.s == 0) {
    masterColor.h = 0;
    hType = 0;
  } else if (masterColor.r == maxRGB() && masterColor.g == minRGB()) {
    masterColor.h = 5 + db;
    hType = 1;
  } else if (masterColor.r == maxRGB() && masterColor.g != minRGB()) {
    masterColor.h = 1 - dg;
    hType = 2;
  } else if (masterColor.g == maxRGB() && masterColor.b == minRGB()) {
    masterColor.h = dr + 1;
    hType = 3;
  } else if (masterColor.g == maxRGB() && masterColor.b != minRGB()) {
    masterColor.h = 3 - db;
    hType = 4;
  } else if (masterColor.r == maxRGB()) {
    masterColor.h = 3 + dg;
    hType = 5;
  } else {
    masterColor.h = 5 - dr;
    hType = 6;
  }
  masterColor.h = masterColor.h * 60;
}

function valueUpdate(a, b, c) {
  a.value(b.value());
}

function maxRGB() {
  var r = masterColor.r;
  var g = masterColor.g;
  var b = masterColor.b;
  var temp = Math.max(Math.max(r, g), b);
  if (temp == r) {
    max.colour = "r";
    max.value = r;
  } else if (temp == g) {
    max.colour = "g";
    max.value = g;
  } else if (temp == b) {
    max.colour = "b";
    max.value = b;
  }
  return temp;
}

function minRGB() {
  var r = masterColor.r;
  var g = masterColor.g;
  var b = masterColor.b;
  var temp = Math.min(Math.min(r, g), b);
  if (temp == r) {
    min.colour = "r";
    min.value = r;
  } else if (temp == g) {
    min.colour = "g";
    min.value = g;
  } else if (temp == b) {
    min.colour = "b";
    min.value = b;
  }
  return temp;
}