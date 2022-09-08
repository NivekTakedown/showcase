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
## Masking

Look at [this reference](https://en.wikipedia.org/wiki/Optical_illusion) for an explanation and further parameterization of the illusion.

{{< details title="código moving picture" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="800" height="600" >}}
   https://editor.p5js.org/crubioa/sketches/bpE30XhKL
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-global-iframe id="breath" width="800" height="600" >}}
let img; let img1;let img2;let img3;let img4;let img5;
let palette;
let rojo; let verde;let azul;
let r;let g;let b;let t;
let tab1; 
let selec1;
let tab2; 
let selec2;

function preload(){
    img1 = loadImage("showcase/content/images/img1.jpg");
    img2 = loadImage("showcase/content/images/img2.jpg");
    img3 = loadImage("showcase/content/images/img3.jpg");
    img4 = loadImage("showcase/content/images/img4.jpg");
    img5 = loadImage("showcase/content/images/imgp.jpg");
}

function setup() {
  createCanvas(600, 1300);
  tab1= createSelect();
  tab1.position(10, 10);
  tab1.option('Imagen');
  tab1.option('-img1');
  tab1.option('-img2');
  tab1.option('-img3');
  tab1.option('-img4');
  tab1.option('-img5');
  tab1.changed(pickEvent1);
  /*
  tab2= createSelect();
  tab2.position(30, 30);
  tab2.option('Histogram');
  tab2.option('-red');
  tab2.option('-blue');
  tab2.option('-green');
  tab2.option('-todos');
  //tab2.changed(pickEvent2);
  */
  img = img1;
  img.resize(600,400);
  rojo = color(255,0,0);
  verde = color(0,255,0);
  azul = color(0,0,255);
  palette =[rojo,verde,azul];
  //noLoop();
}
function pickEvent1() {
    select1 = tab1.value();    
    if (selec1 === '-img1') {
        img = img1;
    } else if (selec1 === '-img2') {
        img = img2;
    } else if (selec1 === '-img3') {
        img = img3;
    } else if (selec1 === '-img4') {
        img = img4;
    } else if (selec1 === '-img5') {
        img = img5;
    } 
}

/*
function pickEven2() {
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
}*/
function draw() {
  background(220);
  image(img,0,400,600,400);
  t=850;
  for(let y=0;y<400;y++){
    r = 0;g = 0;b=0;
    for(let x=0;x<600;x++){
      const imgColor = img.get(x,y);
      const paletteColor = getPalletteColor(imgColor);
      if (paletteColor === rojo){
          r=r+1;
      }
      else if (paletteColor === verde){
          g=g+1;
      }
      else if (paletteColor === azul){
          b=b+1;
      }
      stroke(paletteColor);
      point(x,y);
    }
    t=t+1;
    histograma(r,g,b,t);
  }
}

function getPalletteColor(imgColor){
  const imgR = red(imgColor);
  const imgB = blue(imgColor);
  const imgG = green(imgColor);
  
  let minDistance = 999999;
  let targetColor;
  for(const c of palette){
    const paletteR = red(c);
    const paletteG = green(c);
    const paletteB = blue(c);
    const colorDistance = dist(imgR,imgG,imgB,paletteR,paletteG,paletteB);
    if(colorDistance<minDistance){
      targetColor = c;
      minDistance = colorDistance;
    }
  }
  return targetColor;
} 

function histograma(r,g,b,t){
  stroke(255,0,0);
  line(0,t,r/2,t);
  stroke(0,255,0);
  line(0,t,g/2,t);
  stroke(0,0,255);
  line(0,t,b/2,t);
}

{{< /p5-global-iframe >}}
## **Referencias** 

- [Making Filters Using p5.js!](https://idmnyu.github.io/p5.js-image/Filters/index.html)
- [Kernel](https://www.opto-e.com/basics/kernel)
- [convolution](https://github.com/CodingTrain/website-archive)
- [Histograma](https://todo-fotografia.com/revelado/el-histograma/#:~:text=El%20histograma%20RGB%20es%20el,Rojo%2C%20Verde%20y%20Azul)
- [filter](https://p5js.org/reference/#/p5/filter)
Footer
