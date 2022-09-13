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
## **Referencias** 

- [Making Filters Using p5.js!](https://idmnyu.github.io/p5.js-image/Filters/index.html)
- [Kernel](https://www.opto-e.com/basics/kernel)
- [convolution](https://github.com/CodingTrain/website-archive)
- [Histograma](https://todo-fotografia.com/revelado/el-histograma/#:~:text=El%20histograma%20RGB%20es%20el,Rojo%2C%20Verde%20y%20Azul)
- [filter](https://p5js.org/reference/#/p5/filter)
- [histograma](https://en.wikipedia.org/wiki/Image_histogram) 

