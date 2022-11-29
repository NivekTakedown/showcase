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


# Pixelator
para mover el vehículo hacia la izquierda oprimimos la tecla izquierda y para moverlo a la derecha la derecha, el vehículo se mueve automáticamente hacia adelante.
{{< p5-iframe sketch="/showcase/sketches/taller3/pixelator/sketch.js" lib1="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js" lib2="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js" width="800" height="800" >}}
## **Referencias** 
- [Movimiento mientras se presiona una tecla](https://editor.p5js.org/Viv-Galinari/sketches/SJncLkliW)
- [Modelo mustan](https://www.cgtrader.com/items/2226459/download-page)
- [Textura caretera](https://www.pexels.com/es-es/foto/roca-gris-8892/)
Footer
