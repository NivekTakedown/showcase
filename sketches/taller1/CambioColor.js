var masterColor = {r: 0,g: 0,b: 0,h: 0,s: 0,v: 0};

//variables hsb
let input;
let img;
let R ;
let G ;
let B ;

var hType = 0;
var max = {colour: "-",value: 0};
var min = {colour: "-",value: 0};

function setup() {
  createCanvas(400,200);
  input = createFileInput(handleFile);
  input.position(0, 0);
  R= [];G= [];B= [];
  for(let i = 0; i < 80000; i++){
      R[i] = 0;
      G[i] = 0;
      B[i] = 0;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    //imagen normal
    image(img,0,0,400,200);
    Histogram();
  } else if (keyCode === RIGHT_ARROW) {
    //imagen en HSV
    drawHSV();
  } else if (keyCode === LEFT_ARROW) {
    //imagen en HSL
    drawHSL();
  } 
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function Histogram(){
  for(let i = 0; i < 400; i++){
    for(let j = 0; j < 200; j++){
      let c=get(i, j);
      R[c[0]] =R[c[0]]+1;
      G[c[1]] =G[c[1]]+1;
      B[c[2]] =B[c[2]]+1;
    }
  }
}

function drawHSV() {
  let j=0;
  let x=0;
  let y=0;
  for(let i = 0; i < 80000; i++){
    masterColor.r = R[j];
    masterColor.g = G[j];
    masterColor.b = B[j];
    calHSV();
    strokeWeight(0);
    fill(masterColor.h, masterColor.s, masterColor.v);
    rect(x,y,1,1);
    j++;
    if(x>400){
      y+=2
      x=0;
    }
    x+=2;
  }
}

function drawHSL(){
  let j=0;
  let c;
  let x=0;
  let y=0;
  for(let i = 0; i < 80000; i++){
    masterColor.r = R[j];
    masterColor.g = G[j];
    masterColor.b = B[j];
    strokeWeight(0);
    c = color(masterColor.r, masterColor.g, masterColor.b);
    fill( `hsl(${ floor(hue(c))}, ${saturation(c)}%, ${lightness(c)}%)` );
    rect(x,y,1,1);
    j++;
    if(x>400){
      y+=2
      x=0;
    }
    x+=2;
  }
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