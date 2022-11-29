# Geometría no euclidiana
 
Se denomina geometría no euclidiana a un sistema de geometría que no cumple con los postulados establecidas por Euclides:
- dado dos puntos se puede trazar una sola recta que los une
- cualquier segmento puede prolongarse de manera continua en cualquier sentido
- se puede trazar una circunferencia con centro de cualquier punto  y de cualquier radio
- todos los ángulos rectos son congruentes
- por un punto exterior a una recta se puede trazar una paralela (surge la geometría no euclidiana, hiperbólica-lobachevsky: existen varias paralelas, eliptica-riemann: no pasa una recta paralela. 
 
y en este trabajo lo podemos ver al crear un enlace entre dos espacios virtuales compartiendo un mismo punto de vista.
 
Para esto se crean 5 sesiones en p5 graphics, en las cuales se cargan los modelos 3D y una cámara que comparte punto de vista en las 5 sesiones, de estas sesiones lo que observa la cámara va a utilizarse como textura, estas se envían como texturas al fragment shader para posteriormente mapearse sobre una de las caras del cubo. 

# Procedural texturing
 
Una textura procedimental, es una textura que se crea a partir de un algoritmo, generando en tiempo real mediante este, en vez de ya estar almacenada directamente.
En este ejercicio la meta es crear una textura que se modifique en tiempo de ejecución siguiendo un algoritmo, para este ejercicio decidimos utilizar la ecuación del amor.
Para la solución de este ejercicio se adaptó un código del libro book of shaders, en el que se enseña las funciones que se pueden usar en un shader y cómo podemos hacer para crear movimiento con las uniforms y las varyings.



{{< katex display >}}
x^{2}+\left ( y-  \sqrt[3]{x^{2}} \right )^{2}= 1
{{< /katex >}}

Esta representación no la podemos escribir en el fragment shader, esto porque podemos asignar una sola variable al tiempo. para solucionar este problemas se divide la ecuación en dos y queda como sigue:


{{< katex display >}}
y=\sqrt{1-x^2}+\sqrt[3]{x^2},\:y=-\sqrt{1-x^2}+\sqrt[3]{x^2} 
{{< /katex >}}



{{< details title="código software js" open=false >}}
{{< highlight html >}}


let easycam;
let edge = 160;
let teapot;
let teapotTex;
let bunny;
let bunnyTex;
let tails;
let tailsTex;
let crash;
let crashTex;
let dio;
let dioTex;
let rex;
let rexTex;
let texShader;
let miShader;

let pg;
let truchetShader;
function preload() {
  truchetShader = readShader('/showcase/sketches/taller3/shader2.frag',
                             { matrices: Tree.NONE, varyings: Tree.NONE });
  // no varyings need to be emitted from the vertex shader
  texShader = readShader('/showcase/sketches/taller3/fragmentShader.frag',
                         { varyings: Tree.NONE });
  miShader = readShader('/showcase/sketches/taller3/shader2.frag',
                         { varyings: Tree.NONE });
  teapot = loadModel('/showcase/sketches/taller3/teapot.obj', true);
  bunny = loadModel('/showcase/sketches/taller3/bunny.obj', true);
  tails = loadModel('/showcase/sketches/taller3/Tails.obj', true);
  crash = loadModel('/showcase/sketches/taller3/crash.obj', true);
  dio = loadModel('/showcase/sketches/taller3/dio.obj', true);
  rex = loadModel('/showcase/sketches/taller3/rex.obj', true);
}

function setup() {
  createCanvas(800, 600, WEBGL);
  // no need to normalize the texture
  // textureMode(NORMAL);
  shader(texShader);
  // resolution will be used to sample the offscreen textures
  emitResolution(texShader);
  easycam = createEasyCam();
  teapotTex = createGraphics(width, height, WEBGL);
  bunnyTex = createGraphics(width, height, WEBGL);
  tailsTex = createGraphics(width, height, WEBGL);
  crashTex = createGraphics(width, height, WEBGL);
  dioTex = createGraphics(width, height, WEBGL);
  rexTex = createGraphics(width, height, WEBGL);
  pg = createGraphics(width, height, WEBGL);
  textureMode(NORMAL);
  pg.noStroke();
  pg.textureMode(NORMAL);
  pg.background(255);
  pg.reset();
  pg.push();
  truchetShader.setUniform('u_mouse', mouseX+0.0);
  pg.shader(truchetShader);
  // emitResolution, see:
  // https://github.com/VisualComputing/p5.treegl#macros
  pg.emitResolution(truchetShader);
  // https://p5js.org/reference/#/p5.Shader/setUniform
  truchetShader.setUniform('u_time', frameCount);
  truchetShader.setUniform('u_mouse', mouseX+0.0);
  // pg clip-space quad (i.e., both x and y vertex coordinates ∈ [-1..1])
  pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
}

function draw() {
  // 1. compute current main canvas camera params
  let position = treeLocation();
  let center = p5.Vector.add(position, treeDisplacement());
  let up = treeDisplacement(Tree.j);
  // in case the current camera projection params are needed check:
  // https://github.com/VisualComputing/p5.treegl#frustum-queries
  // 2. offscreen rendering
  // bunny graphics
  bunnyTex.background(200);
  bunnyTex.reset();
  bunnyTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  bunnyTex.push();
  bunnyTex.noStroke();
  bunnyTex.fill('red');
  // most models use positive y-coordinates
  bunnyTex.scale(1, -1);
  bunnyTex.scale(0.8);// only bunny
  bunnyTex.model(bunny);
  bunnyTex.pop();
  // teapot graphics
  teapotTex.background(200);
  teapotTex.reset();
  teapotTex.camera(position.x, position.y, position.z,
                   center.x, center.y, center.z,
                   up.x, up.y, up.z);
  teapotTex.push();
  teapotTex.noStroke();
  teapotTex.fill('blue');
  teapotTex.scale(1, -1);
  teapotTex.model(teapot);
  teapotTex.pop();
  
  tailsTex.background(200);
  tailsTex.reset();
  tailsTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  tailsTex.push();
  tailsTex.noStroke();
  tailsTex.fill('orange');
  // most models use positive y-coordinates
  tailsTex.scale(1, -1);
  tailsTex.model(tails);
  tailsTex.pop()
  
  crashTex.background(200);
  crashTex.reset();
  crashTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  crashTex.push();
  crashTex.noStroke();
  crashTex.fill('orange');
  // most models use positive y-coordinates
  crashTex.scale(1, -1);
  crashTex.model(crash);
  crashTex.pop()
  
  dioTex.background(225);
  dioTex.reset();
  dioTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  dioTex.push();
  dioTex.noStroke();
  dioTex.fill('yellow');
  // most models use positive y-coordinates
  dioTex.scale(1, -1);
  dioTex.model(dio);
  dioTex.pop()
  
  rexTex.background(225);
  rexTex.reset();
  rexTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  rexTex.push();
  rexTex.noStroke();
  rexTex.fill('gray');
  // most models use positive y-coordinates
  rexTex.scale(1, -1);
  rexTex.model(rex);
  rexTex.pop()
  // 3. main canvas
  background(0);
  push();
  // front (+z)
  stroke('purple');
  strokeWeight(5);
  texShader.setUniform('texture', bunnyTex);
  beginShape();
  vertex(+edge, +edge, -edge);
  vertex(-edge, +edge, -edge);
  vertex(-edge, +edge, +edge);
  vertex(+edge, +edge, +edge);
  endShape(CLOSE);
  texShader.setUniform('texture', teapotTex);
  beginShape();
  vertex(-edge, -edge, +edge);
  vertex(+edge, -edge, +edge);
  vertex(+edge, -edge, -edge);
  vertex(-edge, -edge, -edge);
  endShape(CLOSE);
  
  texShader.setUniform('texture', dioTex);
  beginShape();
  vertex(-edge, -edge, +edge);
  vertex(+edge, -edge, +edge);
  vertex(+edge, +edge, +edge);
  vertex(-edge, +edge, +edge);
  endShape(CLOSE);
  push();
  shader(truchetShader);
  truchetShader.setUniform('u_resolution', [width, height]);
  truchetShader.setUniform('u_time', frameCount/100+0.0);
  pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  texture(pg);
  translate(0,0,-edge);
  square(-edge, -edge, edge+edge);
  pop();
  texShader.setUniform('texture', crashTex);
  beginShape();
  vertex(+edge, -edge, +edge);
  vertex(+edge, -edge, -edge);
  vertex(+edge, +edge, -edge);
  vertex(+edge, +edge, +edge);
  endShape(CLOSE);
  texShader.setUniform('texture', tailsTex);
  beginShape();
  vertex(-edge, +edge, -edge);
  vertex(-edge, +edge, +edge);
  vertex(-edge, -edge, +edge);
  vertex(-edge, -edge, -edge);
  endShape(CLOSE);

  pop();
  
  pop();
}











{{< /highlight >}}
{{< /details >}}
{{< details title="código fragment shader Geometría no euclidiana" open=false >}}
{{< highlight html >}}




precision mediump float;

uniform sampler2D texture;
uniform vec2 u_resolution;

void main() {
  vec2 st1 = gl_FragCoord.xy / u_resolution;
  gl_FragColor = texture2D(texture, vec2(st1.x,(1.0-st1.y)));
}






{{< /highlight >}}
{{< /details >}}

{{< details title="código fragment shader procedural texturing" open=false >}}
{{< highlight html >}}




// Author:Kevin Fabio Ramos López

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D tex;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct+0.02, st.y) -
          smoothstep( pct+.02, pct+0.02, st.y);
}//tomado de https://thebookofshaders.com/

void main() {
  float a=2.75;
  float time= 9.0;
    vec2 st = gl_FragCoord.xy/u_resolution;
    float x=st.x*(a+sin(u_time*time))-2.2-(-(cos(u_time*time)));
    // Smooth interpolation between 0.1 and 0.9
    float y = 0.89+(sqrt(-x*x+1.0)+pow(x*x, 1.0/ 3.0))/(a+sin(u_time*time));
	float z = 0.9+(-sqrt(-x*x+1.0)+pow(x*x, 1.0/ 3.0))/(a+sin(u_time*time));
    vec3 color = vec3(y);

    float pct = plot(st,y);
    float pct2 = plot(st,z);
    color = +pct*vec3(0.0,1.0,1.0)+pct2*vec3(0.0,1.0,1.0);

    gl_FragColor = vec4(.8,.8,.8,1.0)-vec4(color,abs(sin(u_time*time)));
}








{{< /highlight >}}
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/taller3/sketch.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js" lib3="https://freshfork.github.io/p5.EasyCam/p5.easycam.js" lib4="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js"  width="800" height="600" >}}


# pixelator
La coherencia es parcial es el fenómeno visual en el que los colores varían dependiendo de la distancia de la que se está observando, entre mayor distancia hay entre puntos es más probable que los colores de estos difieran.
En este ejercicio, se diseñará un pixelator, esta es una técnica que se encarga de reducir la resolución de una imagen (La resolución de una imagen indica la cantidad de detalles que puede observarse en esta), sin perder la coherencia (forma y diseño). Esto es posible, gracias a que las imágenes están creadas en un mapa de bits. 
La vectorización primero crea una representación vectorial independiente de la resolución del gráfico que se va a escalar, guardando la posición de cada píxel. Digamos que tengo una imagen que quiero "pixelar". Quiero esta imagen nítida representada por una cuadrícula de, digamos, 100 x 100 cuadrados. Entonces, si la foto original es de 500 px X 500 px, cada cuadrado es de 5 px X 5 px. Entonces, cada cuadrado tendría un color correspondiente al grupo de píxeles de 5 px X 5 px por el que se intercambia. El escalado de imágenes se puede interpretar como una forma de remuestreo de imágenes o reconstrucción de imágenes 

{{< details title="código fragment shader pixelator" open=false >}}
{{< highlight html >}}




precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform float tiles;

void main() {

  vec2 uv = vTexCoord;
  uv = 1.0 - uv;
  uv = floor(uv * tiles)/tiles;
  vec4 tex = texture2D(tex0, uv);
  gl_FragColor = tex;

  //ver cambio en la textura
  //gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}






{{< /highlight >}}
{{< /details >}}

{{< details title="código vertex shader pixelator" open=false >}}
{{< highlight html >}}




attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;

  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;
}




{{< /highlight >}}
{{< /details >}}

{{< details title="código software js pixelator" open=false >}}
{{< highlight html >}}



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




{{< /highlight >}}
{{< /details >}}
{{< p5-iframe sketch="/showcase/sketches/taller3/pixelator/sketch.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js" lib2="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js" width="800" height="800" >}}

# conclusiones
- Una textura procedural se puede utilizar para modelar superficies volumétricas de elementos naturales, en videojuegos.
- la geometría no euclidiana es un  concepto más difícil de entender  que de implementar
Los núcleos de la GPU no tienen memoria y no pueden saber lo que hacen otros núcleos, la información que utilizan para dibujar son las uniforms que es igual para todos y las varying que es la información que varía  de uno a otro.
- El escalado de imágenes es esencial como una de sus aplicaciones ya que es necesaria para el zoom
- debido a que en un inicio los equipos no podían sostener una gran capacidad gráfica, se decidió recurrir al pixel art, como principal forma de generar una interfaz, hoy en día debido a su facilidad y bajo coste computacional, es una gran herramienta para desarrolladores y artistas

## **Referencias** 
- [book of shaders](https://thebookofshaders.com/)
- [Geometría no euclidiana](https://es.wikipedia.org/wiki/Geometr%C3%ADa_no_euclidiana)
- [crash-bandicoot model](https://sketchfab.com/3d-models/crash-bandicoot-442556bf988345afbbdc1f398c169a30#download)
- [Tails model]( https://sketchfab.com/3d-models/tails-obj-free-3d-model-7a79162d7da14bf49fc194f8cc9322f8)
- [dio-wry-pose model](https://sketchfab.com/3d-models/dio-wry-pose-5dab629697204550af955b9994507923)
- [metal-gear-rex model](https://sketchfab.com/3d-models/metal-gear-rex-7078266ac0e7463db9093e0bbf9c59b1#download)
- [mario model](https://sketchfab.com/3d-models/super-mario-64-rigged-and-fixed-textures-c4016c4356e94a3cac7e54f5c7e5eb61)
- [Image_scaling](https://en.wikipedia.org/wiki/Image_scaling)
- [Imagen_de_mapa_de_bits](https://es.wikipedia.org/wiki/Imagen_de_mapa_de_bits)


