# Aplicación en 3d 1

El juego consiste en llevar la bola hasta el final de la pista, al finalizar nos mostrará el tiempo que nos demoramos en llegar a la meta, para movernos hacia adelante, hacia la izquierda y hacia la derecha oprimimos las teclas w,a y d. Al iniciar habrán 3 barras, la primera indica el largo de la pista, la segunda el alto de los obstáculos y la tercera la distancia entre estos. Una vez ya hemos cuadrado estos parámetros presionamos enter y el juego arrancará.

{{< details title="código juego bola" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="625" height="625" >}}

{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/taller3/sketch.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js" lib3="https://freshfork.github.io/p5.EasyCam/p5.easycam.js" lib4="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js"  width="800" height="800" >}}
# Aplicación en 3d 2
para mover el vehículo hacia la izquierda oprimimos la tecla izquierda y para moverlo a la derecha la derecha, el vehículo se mueve automáticamente hacia adelante.
{{< details title="código juego carro" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="625" height="625" >}}
let cam;
let j=0;
let i=0;
let k=0;
let img;
let carretera=0;
let myFont;
function preload() {
  mustang = loadModel('/showcase/sketches/taller2/assets/ford_mustan_gt1967.obj');
  img = loadImage('/showcase/sketches/taller2/assets/pexels-life-of-pix-8892.jpg');
}

function setup() {
  createCanvas(710, 400, WEBGL);
  cam= createCamera();
  cam.move(0,-100,0)
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
  plane(800,12000); 
  
  //translate(0,carretera);
  //carretera=carretera-1200*8
  pop();

}

{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}
{{< p5-iframe sketch="/showcase/sketches/taller2/taller2.js" width="720" height="400" >}}
## **Referencias** 
- [Movimiento mientras se presiona una tecla](https://editor.p5js.org/Viv-Galinari/sketches/SJncLkliW)
- [Modelo mustan](https://www.cgtrader.com/items/2226459/download-page)
- [Textura caretera](https://www.pexels.com/es-es/foto/roca-gris-8892/)
