## Moving picture

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