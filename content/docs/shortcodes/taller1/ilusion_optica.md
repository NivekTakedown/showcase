## Moving picture

Look at [this reference](https://en.wikipedia.org/wiki/Optical_illusion) for an explanation and further parameterization of the illusion.

{{< details title="código moving picture" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="625" height="625" >}}
  // Coded as `global mode` of [this](https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/rotateSquare.js)
  let x,y,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,
  c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35;


  function setup(){
    createCanvas(720,400);
    strokeWeight(2);
    x = width/2;
    y = height/2;
    c1=16*1;c2=16*2;c3=16*3;c4=16*4;c5=16*5;c6=16*6;c7=16*7;c8=16*8;c9=16*9;
    c10=16*10;c11=16*11;c12=16*12;c13=16*13;c14=16*14;c15=16*15;c16=16*16;
    c17=16*17;c18=16*18;c19=16*19;c20=16*20;c21=16*21;c22=16*22;c23=16*23;
    c24=16*24;c25=16*25;c26=16*26;c27=16*27;c28=16*28;c29=16*29;c30=16*30;
    c31=16*31;c32=16*32;c33=16*33;c34=16*34;c35=16*35;
    
  }

  function draw(){
    background("white");
    //line(0,y,width,y);
    //line(x,0,x,height);
    fill('red');
    stroke('red');
    circle(x,y,5);
    stroke('black');
    
    cuadro(x,y,c1);cuadro(x,y,c2);cuadro(x,y,c3);cuadro(x,y,c4);
    cuadro(x,y,c5);cuadro(x,y,c6);cuadro(x,y,c7);cuadro(x,y,c8);
    cuadro(x,y,c9);cuadro(x,y,c10);cuadro(x,y,c11);cuadro(x,y,c12);
    cuadro(x,y,c13);cuadro(x,y,c14);cuadro(x,y,c15);cuadro(x,y,c16);
    cuadro(x,y,c17);cuadro(x,y,c18);cuadro(x,y,c19);cuadro(x,y,c20);
    cuadro(x,y,c21);cuadro(x,y,c22);cuadro(x,y,c23);cuadro(x,y,c24);
    cuadro(x,y,c25);cuadro(x,y,c26);cuadro(x,y,c27);cuadro(x,y,c28);
    cuadro(x,y,c29);cuadro(x,y,c30);cuadro(x,y,c31);cuadro(x,y,c32);
    cuadro(x,y,c33);cuadro(x,y,c34);cuadro(x,y,c35);
    
    c1+=16;c2+=16;c3+=16;c4+=16;c5+=16;c6+=16;c7+=16;c8+=16;c9+=16;c10+=16;
    c11+=16;c12+=16;c13+=16;c14+=16;c15+=16;c16+=16;c17+=16;c18+=16;c19+=16;
    c20+=16;c21+=16;c22+=16;c23+=16;c24+=16;c25+=16;c26+=16;c27+=16;c28+=16;
    c29+=16;c30+=16;c31+=16;c32+=16;c33+=16;c34+=16;c35+=16;
    
    if(c35 > 560){c35 = 0;}if(c34 > 560){c34 = 0;}if(c33 > 560){c33 = 0;}
    if(c32 > 560){c32 = 0;}if(c31 > 560){c31 = 0;}if(c30 > 560){c30 = 0;}
    if(c29 > 560){c29 = 0;}if(c28 > 560){c28 = 0;}if(c27 > 560){c27 = 0;}
    if(c26 > 560){c26 = 0;}if(c25 > 560){c25 = 0;}if(c24 > 560){c24 = 0;}
    if(c23 > 560){c23 = 0;}if(c22 > 560){c22 = 0;}if(c21 > 560){c21 = 0;}
    if(c20 > 560){c20 = 0;}if(c19 > 560){c19 = 0;}if(c18 > 560){c18 = 0;}
    if(c17 > 560){c17 = 0;}if(c16 > 560){c16 = 0;}if(c15 > 560){c15 = 0;}
    if(c14 > 560){c14 = 0;}if(c13 > 560){c13 = 0;}if(c12 > 560){c12 = 0;}
    if(c11 > 560){c11 = 0;}if(c10 > 560){c10 = 0;}if(c9 > 560){c9 = 0;}
    if(c8 > 560){c8 = 0;}if(c7 > 560){c7 = 0;}if(c6 > 560){c6 = 0;}
    if(c5 > 560){c5 = 0;}if(c4 > 560){c4 = 0;}if(c3 > 560){c3 = 0;}
    if(c2 > 560){c2 = 0;}if(c1 > 560){c1 = 0;}
  }

  function cuadro(x,y,ct){
    line(x-ct,y,x,y-ct);
    line(x,y-ct,x+ct,y);
    line(x-ct,y,x,y+ct);
    line(x,y+ct,x+ct,y);
}
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-global-iframe id="breath" width="720" height="400" >}}
  let x,y,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,
c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35;


function setup(){
  createCanvas(720,400);
  strokeWeight(2);
  x = width/2;
  y = height/2;
  c1=16*1;c2=16*2;c3=16*3;c4=16*4;c5=16*5;c6=16*6;c7=16*7;c8=16*8;c9=16*9;
  c10=16*10;c11=16*11;c12=16*12;c13=16*13;c14=16*14;c15=16*15;c16=16*16;
  c17=16*17;c18=16*18;c19=16*19;c20=16*20;c21=16*21;c22=16*22;c23=16*23;
  c24=16*24;c25=16*25;c26=16*26;c27=16*27;c28=16*28;c29=16*29;c30=16*30;
  c31=16*31;c32=16*32;c33=16*33;c34=16*34;c35=16*35;
  
}

function draw(){
  background("white");
  //line(0,y,width,y);
  //line(x,0,x,height);
  fill('red');
  stroke('red');
  circle(x,y,5);
  stroke('black');
  
  cuadro(x,y,c1);cuadro(x,y,c2);cuadro(x,y,c3);cuadro(x,y,c4);
  cuadro(x,y,c5);cuadro(x,y,c6);cuadro(x,y,c7);cuadro(x,y,c8);
  cuadro(x,y,c9);cuadro(x,y,c10);cuadro(x,y,c11);cuadro(x,y,c12);
  cuadro(x,y,c13);cuadro(x,y,c14);cuadro(x,y,c15);cuadro(x,y,c16);
  cuadro(x,y,c17);cuadro(x,y,c18);cuadro(x,y,c19);cuadro(x,y,c20);
  cuadro(x,y,c21);cuadro(x,y,c22);cuadro(x,y,c23);cuadro(x,y,c24);
  cuadro(x,y,c25);cuadro(x,y,c26);cuadro(x,y,c27);cuadro(x,y,c28);
  cuadro(x,y,c29);cuadro(x,y,c30);cuadro(x,y,c31);cuadro(x,y,c32);
  cuadro(x,y,c33);cuadro(x,y,c34);cuadro(x,y,c35);
  
  c1+=16;c2+=16;c3+=16;c4+=16;c5+=16;c6+=16;c7+=16;c8+=16;c9+=16;c10+=16;
  c11+=16;c12+=16;c13+=16;c14+=16;c15+=16;c16+=16;c17+=16;c18+=16;c19+=16;
  c20+=16;c21+=16;c22+=16;c23+=16;c24+=16;c25+=16;c26+=16;c27+=16;c28+=16;
  c29+=16;c30+=16;c31+=16;c32+=16;c33+=16;c34+=16;c35+=16;
  
  if(c35 > 560){c35 = 0;}if(c34 > 560){c34 = 0;}if(c33 > 560){c33 = 0;}
  if(c32 > 560){c32 = 0;}if(c31 > 560){c31 = 0;}if(c30 > 560){c30 = 0;}
  if(c29 > 560){c29 = 0;}if(c28 > 560){c28 = 0;}if(c27 > 560){c27 = 0;}
  if(c26 > 560){c26 = 0;}if(c25 > 560){c25 = 0;}if(c24 > 560){c24 = 0;}
  if(c23 > 560){c23 = 0;}if(c22 > 560){c22 = 0;}if(c21 > 560){c21 = 0;}
  if(c20 > 560){c20 = 0;}if(c19 > 560){c19 = 0;}if(c18 > 560){c18 = 0;}
  if(c17 > 560){c17 = 0;}if(c16 > 560){c16 = 0;}if(c15 > 560){c15 = 0;}
  if(c14 > 560){c14 = 0;}if(c13 > 560){c13 = 0;}if(c12 > 560){c12 = 0;}
  if(c11 > 560){c11 = 0;}if(c10 > 560){c10 = 0;}if(c9 > 560){c9 = 0;}
  if(c8 > 560){c8 = 0;}if(c7 > 560){c7 = 0;}if(c6 > 560){c6 = 0;}
  if(c5 > 560){c5 = 0;}if(c4 > 560){c4 = 0;}if(c3 > 560){c3 = 0;}
  if(c2 > 560){c2 = 0;}if(c1 > 560){c1 = 0;}
}

function cuadro(x,y,ct){
  line(x-ct,y,x,y-ct);
  line(x,y-ct,x+ct,y);
  line(x-ct,y,x,y+ct);
  line(x,y+ct,x+ct,y);
}
{{< /p5-global-iframe >}}
## Estrella

En este lugar se puede encontrar la ilusión óptica original: [this reference](https://www.alamy.es/ilustracion-grafica-3d-imagen-de-estrella-de-la-ilusion-optica-hecha-de-cuadrados-de-color-arco-iris-3d-image402311367.html) 

{{< details title="código estrella" open=false >}}
{{< highlight html >}}
{{</* p5-global-iframe id="breath" width="625" height="625" >}}
  // Coded as `global mode` of [this](https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/rotateSquare.js)
  let h;
  let w;
  let perc1;
  let perc2;
  let perc3;
  function setup() {
    createCanvas(400, 400);
    h=float(0.9);
    w=float(width/2);
    perc1=0.05;
    perc2=0.0125;
    perc3=0.1;
  }

  function draw() {
    background(220);
    let num = 26;
    let num1 = 1;
    while (num > 0) {
      if (num % 2==0) {
        fill(0,0,0);
      } else {
        fill(255,255,255)
      }
      num = num - 1;
      square(w*0.0125+w+perc1*w*num1/30,w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(w*perc2+w+perc1*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      num1 = num1+ 7;
    }
  }
{{< /p5-global-iframe */>}}
{{< /highlight >}}
{{< /details >}}

{{< p5-global-iframe id="breath" width="400" height="400" >}}
  let h;
  let w;
  let perc1;
  let perc2;
  let perc3;
  function setup() {
    createCanvas(400, 400);
    h=float(0.9);
    w=float(width/2);
    perc1=0.05;
    perc2=0.0125;
    perc3=0.1;
  }

  function draw() {
    background(220);
    let num = 26;
    let num1 = 1;
    while (num > 0) {
      if (num % 2==0) {
        fill(0,0,0);
      } else {
        fill(255,255,255)
      }
      num = num - 1;
      square(w*0.0125+w+perc1*w*num1/30,w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(w*perc2+w+perc1*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      num1 = num1+ 7;
    }
  }
{{< /p5-global-iframe >}}

## Prueba online
{{< p5-widget autoplay=true height="400" width="400" ver="1.4.2" >}}
  let h;
  let w;
  let perc1;
  let perc2;
  let perc3;
  function setup() {
    createCanvas(400, 400);
    h=float(0.9);
    w=float(width/2);
    perc1=0.05;
    perc2=0.0125;
    perc3=0.1;
  }

  function draw() {
    background(220);
    let num = 26;
    let num1 = 1;
    while (num > 0) {
      if (num % 2==0) {
        fill(0,0,0);
      } else {
        fill(255,255,255)
      }
      num = num - 1;
      square(w*0.0125+w+perc1*w*num1/30,w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*perc2+w+perc1*w*num1/30,w*h-num1);
      square(w*perc2+w+perc1*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      square(-w*perc2+(1-h)*w+perc3*w*num1/30,+w*0.085+perc3*w*num1/30,w*h-num1);
      num1 = num1+ 7;
    }
  }
{{< /p5-widget >}}