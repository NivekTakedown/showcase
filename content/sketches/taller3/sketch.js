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
  teapot = loadModel('/showcase/sketches/taller3/bunny.obj', true);
  bunny = loadModel('/showcase/sketches/taller3/rex.obj', true);
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
  teapotTex.fill('gray');
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
