## Masking
Un kernel es una mask que se usa para aplicar filtros a una imagen. Estas máscaras tienen forma de matriz cuadrada, por lo que también se denominan matrices de convolución.

Consideremos la matriz A, que representa la matriz que contiene los valores de gris de todos los píxeles de la imagen original, y la matriz B que representa la matriz kernel. Ahora superpongamos la matriz A con la matriz B, de modo que el centro de la matriz B corresponda al píxel de la matriz A que se procesará.

El valor de la imagen objetivo (matriz C) se calcula como la suma de todos los elementos de la matriz resultante del producto de Hadamard entre las matrices A y B.

Recordamos que el producto de Hadamard es una operación binaria que toma dos matrices de la misma dimensione y produce otra matriz de igual dimensión, donde cada elemento i , j es el producto de los elementos i , j de las dos matrices originales

<img src="https://www.opto-e.com/basics/media/basics/software/3D_Convolution_Animation.gif" alt="Convolution" style="height: 390px; width:345px; margin: 30px auto; display: block;"/>

Look at [this reference](https://en.wikipedia.org/wiki/Optical_illusion) for an explanation and further parameterization of the illusion.

{{< details title="código moving picture" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="800" height="600" >}}
  // Coded as `global mode` of [this](https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/rotateSquare.js)
let tab; //menu de seleccion
let selec;
let img;
let c1=0;let c2=0;let c3=0;let c4=0;
function setup() {
  var canvas = createCanvas(800,600);
  background(209);
  canvas.drop(gotFile);
  
  tab= createSelect();
  tab.position(10, 10);
  tab.option('Masking');
  tab.option('-gris');
  tab.option('-invert');
  tab.option('-threshold');
  tab.option('-blur');
  tab.option('-erode');
  tab.option('-dilate');
  tab.option('-sin filtro');
  tab.changed(pickEvent);
}

function gotFile(file) {
  img = createImg(file.data);
  img.hide();
  image(img,0,0,800,600);
}

function pickEvent() {
    selec = tab.value();    
    if (selec === '-gris') {
        selec = 1;
    } else if (selec === '-invert') {
        selec = 2;
    } else if (selec === '-threshold') {
        selec = 3;
    } else if (selec === '-blur') {
        selec = 4;
    } else if (selec === '-erode') {
        selec = 5;
    } else if (selec === '-dilate') {
        selec = 6;
    } else if (selec === '-sin filtro') {
        selec = 0;
    }
}
function canva(){
    createCanvas(800,600);
    background(209);
    image(img,0,0,800,600);
}

function draw(){
  if (selec == 1){
    c1=0;c2=0;c3=0;c4=0;
    canva();
    filter(GRAY); //escala de grises
  } else if (selec == 2){
    c1=0;c2=0;c3=0;
    c4 = c4+1;
    if (c4 == 1){
      canva();
      filter(INVERT);
    }
  } else if (selec == 3){
    c1=0;c2=0;c3=0;c4=0;
    canva();
    filter(THRESHOLD); //píxeles en blanco y negro umbral
  } else if (selec == 4){
    c2=0;c3=0;c4=0;
    c1 = c1+1;
    if (c1 == 1){
      canva();
      filter(BLUR,3); //desenfoque
    }
  } else if (selec == 5){
    c1=0;c3=0;c4=0;
    c2 = c2+1;
    if (c2 == 1){
      canva();
      filter(ERODE) //reduce las areas claras
    }
  } else if (selec == 6){
    c2=0;c1=0;c4=0;
    c3 = c3+1;
    if (c3 == 1){
      canva();
      filter(DILATE ); //aumenta las areas claras
    }
  } else if (selec == 0){
    c1=0;c2=0;c3=0;c4=0;
    canva();
  }
}
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-global-iframe id="breath" width="800" height="600" >}}
 let tab; //menu de seleccion
let selec;
let img;
let c1=0;let c2=0;let c3=0;let c4=0;
function setup() {
  var canvas = createCanvas(800,600);
  background(209);
  canvas.drop(gotFile);
  
  tab= createSelect();
  tab.position(10, 10);
  tab.option('Masking');
  tab.option('-gris');
  tab.option('-invert');
  tab.option('-threshold');
  tab.option('-blur');
  tab.option('-erode');
  tab.option('-dilate');
  tab.option('-sin filtro');
  tab.changed(pickEvent);
}

function gotFile(file) {
  img = createImg(file.data);
  img.hide();
  image(img,0,0,800,600);
}

function pickEvent() {
    selec = tab.value();    
    if (selec === '-gris') {
        selec = 1;
    } else if (selec === '-invert') {
        selec = 2;
    } else if (selec === '-threshold') {
        selec = 3;
    } else if (selec === '-blur') {
        selec = 4;
    } else if (selec === '-erode') {
        selec = 5;
    } else if (selec === '-dilate') {
        selec = 6;
    } else if (selec === '-sin filtro') {
        selec = 0;
    }
}
function canva(){
    createCanvas(800,600);
    background(209);
    image(img,0,0,800,600);
}

function draw(){
  if (selec == 1){
    c1=0;c2=0;c3=0;c4=0;
    canva();
    filter(GRAY); //escala de grises
  } else if (selec == 2){
    c1=0;c2=0;c3=0;
    c4 = c4+1;
    if (c4 == 1){
      canva();
      filter(INVERT);
    }
  } else if (selec == 3){
    c1=0;c2=0;c3=0;c4=0;
    canva();
    filter(THRESHOLD); //píxeles en blanco y negro umbral
  } else if (selec == 4){
    c2=0;c3=0;c4=0;
    c1 = c1+1;
    if (c1 == 1){
      canva();
      filter(BLUR,3); //desenfoque
    }
  } else if (selec == 5){
    c1=0;c3=0;c4=0;
    c2 = c2+1;
    if (c2 == 1){
      canva();
      filter(ERODE) //reduce las areas claras
    }
  } else if (selec == 6){
    c2=0;c1=0;c4=0;
    c3 = c3+1;
    if (c3 == 1){
      canva();
      filter(DILATE ); //aumenta las areas claras
    }
  } else if (selec == 0){
    c1=0;c2=0;c3=0;c4=0;
    canva();
  }
}
{{< /p5-global-iframe >}}
# histograma de imagen
{{< hint info >}}
Un histograma de imagen, es un histograma que actúa como una representación gráfica de la distribución de tonos en la imagen, nos dice la influencia de cada uno de los colores a lo largo de toda la imagen.
{{< /hint >}}
 
Para mostrar el histograma seleccionamos la imagen con el botón browse, mostramos la imagen con el botón izquierda y mostramos el histograma con el botón derecha.


{{< details title="código histograma" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="800" height="600" >}}
  let input;
  let img;
  let histogramR ;
  let histogramG ;
  let histogramB ;
  function setup() {
    createCanvas(800, 600);
    input = createFileInput(handleFile);
    input.position(0, 0);
    histogramR= [];
    histogramG= [];
    histogramB= [];
    for(let i = 0; i < 256; i++){
      histogramR[i] = 0;
      histogramG[i] = 0;
      histogramB[i] = 0;
    }
  }
  function showHistogram(){
    let j=0;
    for(let i = 0; i < 510; i++){
      if(i%2==0){
        fill(color("red"));
        stroke(color("red"));
        line(i,600,i,600-histogramR[j]);
        fill(color("green"));
        stroke(color("green"));
        line(i,600,i,600-histogramG[j]);
        fill(color("blue"));
        stroke(color("blue"));
        line(i,600,i,600-histogramB[j]);
        j++;
      }
    }
  }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      image(img, 0, 0, 800, 600);
    } else if (keyCode === RIGHT_ARROW) {
      Histogram();
      showHistogram();
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
    console.log("hist");
      for(let i = 0; i < 800; i=i+4){
          for(let j = 0; j < 600; j=j+4){
            let c=get(i, j);
            histogramR[c[0]] =histogramR[c[0]]+1;
            histogramG[c[1]] =histogramG[c[1]]+1;
            histogramB[c[2]] =histogramB[c[2]]+1;
            console.log(histogramR[c]);
        }
      }
      background(255);
  }
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-global-iframe id="breath" width="800" height="600" >}}
  let input;
  let img;
  let histogramR ;
  let histogramG ;
  let histogramB ;
  function setup() {
    createCanvas(800, 600);
    input = createFileInput(handleFile);
    input.position(0, 0);
    histogramR= [];
    histogramG= [];
    histogramB= [];
    for(let i = 0; i < 256; i++){
      histogramR[i] = 0;
      histogramG[i] = 0;
      histogramB[i] = 0;
    }
  }
  function showHistogram(){
    let j=0;
    for(let i = 0; i < 510; i++){
      if(i%2==0){
        fill(color("red"));
        stroke(color("red"));
        line(i,600,i,600-histogramR[j]);
        fill(color("green"));
        stroke(color("green"));
        line(i,600,i,600-histogramG[j]);
        fill(color("blue"));
        stroke(color("blue"));
        line(i,600,i,600-histogramB[j]);
        j++;
      }
    }
  }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      image(img, 0, 0, 800, 600);
    } else if (keyCode === RIGHT_ARROW) {
      Histogram();
      showHistogram();
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
    console.log("hist");
      for(let i = 0; i < 800; i=i+4){
          for(let j = 0; j < 600; j=j+4){
            let c=get(i, j);
            histogramR[c[0]] =histogramR[c[0]]+1;
            histogramG[c[1]] =histogramG[c[1]]+1;
            histogramB[c[2]] =histogramB[c[2]]+1;
            console.log(histogramR[c]);
        }
      }
      background(255);
  }
{{< /p5-global-iframe >}}
## HSV y HSL
HSL y HSV, son representaciones alternativas del modelo de color RGB. La representación HSL modela la forma en que las diferentes pinturas se mezclan para crear color en el mundo real, con la dimensión de luminosidad que se asemeja a las cantidades variables de pintura negra o blanca en la mezcla. Mientras tanto, la representación de HSV modela cómo aparecen los colores bajo la luz. La diferencia entre HSL y HSV es que un color con máxima luminosidad en HSL es blanco puro, pero un color con máximo valor/brillo en HSV es similar a hacer brillar una luz blanca sobre un objeto de color.
{{< details title="código histograma" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="800" height="600" >}}
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



{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}
{{< p5-global-iframe id="breath" width="800" height="600" >}}
  {{< p5-global-iframe id="breath" width="800" height="600" >}}
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



{{< /p5-global-iframe >}}
{{< /p5-global-iframe >}}

{{< p5-global-iframe id="breath" width="800" height="600" >}}
{{< p5-global-iframe id="breath" width="800" height="600" >}}
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
{{< /p5-global-iframe >}}
{{< /p5-global-iframe >}}








## **Referencias** 

- [Making Filters Using p5.js!](https://idmnyu.github.io/p5.js-image/Filters/index.html)
- [Kernel](https://www.opto-e.com/basics/kernel)
- [convolution](https://github.com/CodingTrain/website-archive)
- [Histograma](https://todo-fotografia.com/revelado/el-histograma/#:~:text=El%20histograma%20RGB%20es%20el,Rojo%2C%20Verde%20y%20Azul)
- [filter](https://p5js.org/reference/#/p5/filter)
- [histograma](https://en.wikipedia.org/wiki/Image_histogram) 
- [HCL Y HSL](https://editor.p5js.org/crubioa/sketches/xvobUY8TN)
- [HCL Y HSL](https://editor.p5js.org/crubioa/sketches/3mh4enO4m) 
- [HCL Y HSL](https://stackoverflow.com/questions/61018075/how-do-you-convert-the-colour-scheme-of-an-image-loaded-in-p5-js-from-rgb-which) 
- [HCL Y HSL](https://www.peko-step.com/es/tool/hslrgb.html) 
