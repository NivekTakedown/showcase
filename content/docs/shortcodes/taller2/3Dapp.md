# Aplicación en 3d 1

El juego consiste en llevar la bola hasta el final de la pista, al finalizar nos mostrará el tiempo que nos demoramos en llegar a la meta, para movernos hacia adelante, hacia la izquierda y hacia la derecha oprimimos las teclas w,a y d. Al iniciar habrán 3 barras, la primera indica el largo de la pista, la segunda el alto de los obstáculos y la tercera la distancia entre estos. Una vez ya hemos cuadrado estos parámetros presionamos enter y el juego arrancará.

{{< details title="código juego bola" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="625" height="625" >}}
let inicio=0;

let myFont;
function preload() {
  myFont = loadFont('/showcase/sketches/taller2/assets/a.otf');
}
//###estos datos se deben poder cambiar###
let cam;

let slider1;
let slider2;
let slider3;

let dis = 0; //distancia de pista
let ancho = 0;  //ancho de cada rectangulos 10<=,<dis
let largo = 0; //distancia entre rectangulos 16<=<dis

//tiempo
let sec1=0;let sec2=0;
let min1=0;let min2=0;
let tiempo=0;

//extremos de cada figura en z
let f1p1=0;let f1p2=0;
let f2p1=0;let f2p2=0;
let f3p1=0;let f3p2=0;

//posicion de la esfera
var x = 0;
var z = 0;

//posiciones de rectangulos esfera
var posinf = 0;
var posup =0;
var figure = 1; //figura que se esta pasando.

//calculamos las posiciones inciales de cada tipo de rectangulo
function pos(p){
  f1p1 = p-largo;
  f1p2 = f1p1-ancho;
  f2p1 = f1p2-largo;
  f2p2 = f2p1-ancho;
  f3p1 = f2p2-largo;
  f3p2 = f3p1-ancho;
}

function setup(){
  createCanvas(700,700,WEBGL);
  
  slider1 = createSlider(100,3000,600);
  slider1.position(10,20);
  slider2 = createSlider(10,40,20);
  slider2.position(10,60);
  slider3 = createSlider(16,800,50);
  slider3.position(10,100);
  cam= createCamera();
}
function juego(){
  background(175);
  
  ambientLight(255);
  pointLight(255,255,255,0,-200,200)
  
  //###objeto###
  push();
  translate(x,-10,z);
  sphere(10);
  pop();
  
  //#####pista####
  while((f1p1>-(dis/2))&&(f1p2>-(dis/2))){
    //figura1
    push();
    translate(15,-(ancho/2),f1p1-(ancho/2))
    box(70,ancho);
    pop();
    //figura2
    if ((f2p1>-(dis/2))&&(f2p2>-(dis/2))){
      push();
      translate(-15,-(ancho/2),f2p1-(ancho/2))
      box(70,ancho);
      pop();
    }
    //figura3
    if ((f3p1>-(dis/2))&&(f3p2>-(dis/2))){
      push();
      translate(-32.5,-(ancho/2),f3p1-(ancho/2))
      box(35,ancho);
      pop();
      push();
      translate(32.5,-(ancho/2),f3p1-(ancho/2))
      box(35,ancho);
      pop();
    }
    //crear la siguiente linea de figuras
    pos(f3p2);
  }
  
  if (f1p1<-(dis/2)){
    pos(dis/2);
  }
  
  //movimiento de la esfera segun las teclas
  if (keyIsPressed) {
    if (z>-(dis/2)){
      if (keyCode == 68) {
       x+=5
       if (x==55){x=50;} //limite derecho de la pista
       else if ((figure==1)&&(x>=-25)&&((posinf>z)&&(posup<z))){x=-20} //comprubea parte derecha figura1
       else if ((figure==3)&&(x>=20)&&((posinf>z)&&(posup<z))){x=15} //comprubea parte derecha figura3
   }  
    else if (keyCode == 65) {
       x-=5
       if (x===-55){x=-50;} //limite izquierdo de la pista
       else if ((figure==2)&&(x<=15)&&((posinf>z)&&(posup<z))){x=20}  //comprubea parte izquierda figura1
      else if ((figure==3)&&(x<=-20)&&((posinf>z)&&(posup<z))){x=-15} //comprubea parte derecha figura3
   }  
    else if (keyCode == 87) {
      z-=5
      //empieza el reloj
      if (z==(dis/2)-5){
        sec1=second();
        min1=minute();
      }
      //rotateZ(45);
      if (z===((-dis/2)+5)){z=-dis/2;} //limite superior de la pista
      else if ((figure==1)&&((posup<z)&&(z<=posinf+5))&&((-20<x)&&(x<=50))){z=posinf} //limite superior de la figura1
      else if ((figure==2)&&((posup<z)&&(z<=posinf+5))&&((-50<=x)&&(x<20))){z=posinf} //limite superior de la figura 2
      else if ((figure==3)&&((posup<z)&&(z<=posinf+5))&&(((-50<=x)&&(x<-15))||((15<x)&&(x<=50)))){z=posinf} //limite superior de la figura 3
    if (z<posup && figure==1){
       figure = 2;
       posinf = posup-largo;
       posup = posinf-ancho;
     }
     if (z<posup && figure==2){
       figure = 3;
       posinf = posup-largo;
       posup = posinf-ancho;
     }
     if (z<posup && figure==3){
       figure = 1;
       posinf = posup-largo;
       posup = posinf-ancho;
     }
      if(z!=posinf){
        cam.move(0,0,-5); 
      }
     
     }  
  }
  //finaliza el reloj
  else if(z==(-dis/2)){
    sec2=second();
    min2=minute();
    if (min2==min1){
      tiempo=sec2-sec1; //numero de segundo que tardo en completarlo
    }
    else if(min2==min1+1){
      tiempo=(60-sec1)+sec2;
    }
    else if (min2 > min1){
      tiempo=(60-sec1)+(60*(min2-2))+sec2;
    }
    minutos=Math.floor(tiempo/60);
    segundos=tiempo%60;
    push()
    translate(0,-50,z-60)
    textSize(30);
    textFont(myFont);
    text("tiempo:\n \t "+minutos+":"+segundos,-50,-50);
    pop()
    noLoop();
  }
  
  } 
  
  //plataforma de pista
  translate(0,0);
  rotateX(HALF_PI);
  ambientMaterial(100);
  plane(100,dis)

}

function draw(){
  background(220);
  if (keyCode == ENTER&&inicio==0){
    inicio=1;
    dis = slider1.value();
    ancho = slider2.value();
    largo = slider3.value();
    pos(dis/2);
    cam.move(0,-100,dis/2-300)
    z = dis/2;
    posinf = (dis/2)-largo;
    posup = posinf-ancho;
  }
  if(inicio==1){
    juego();
  }    
}
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}
{{< p5-iframe sketch="/showcase/sketches/taller2/bola/bola.js" width="720" height="800" >}}
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
