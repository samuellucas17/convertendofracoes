var tela=1,largura=300,altura=60,xMenu=100,yMenu1=150
var yMenu2=250,yMenu3=350,centroY=180,f=0,v=0;
var x=110,h=110,k=0,i=0,j=0,l=0,h=0,g=0,x=0,b=0;
var vba=[],vbc=[],vbv=[],vbve=[],vbam=[];
var flag1=false,flag2=false,flag3=false;
var f1=false,f2=false,f3=false;
var cont=0,cont1=0,cont3=0,pontos=0,cont4=0,cont5=0,
    cont6=0,m=0;
function mouseClicked(){
  if(dist(112,centroY,mouseX,mouseY)<45){
    if(tela==2){flag1=true;
    pontos=pontos+125;
                cer.play();
               pp.play();}
    if(tela==6){flag1=true;
                pp.play();
               err.play();}
    if(tela==8){flag1=true;
     pontos=pontos+125;
                cer.play();
                pp.play();}
    if(tela==10){ flag1=true;
                 pp.play();
                err.play();}
    if(tela==12){ flag1=true;
                 pp.play();
                err.play();}
    if(tela==14){ flag1=true;
                  pp.play();
                err.play();}
    if(tela==16){
                flag1=true;
                 pp.play();
                err.play();
  }
   if(tela==18){
              flag1=true;
              pp.play();
              cer.play();
     pontos=pontos+125
  }
  }
  if(dist(250,centroY,mouseX,mouseY)<45){
    if(tela==2){flag2=true;
                pp.play();
              err.play(); }
    if(tela==6){flag2=true;
               pontos=pontos+125;
                cer.play();
                pp.play();}
    if(tela==8){flag2=true;
                pp.play();
                err.play();}
   if(tela==10){flag2=true;
                pp.play();
                err.play();}
   if(tela==12){flag2=true;
                 pp.play();
   pontos=pontos+125;
               cer.play();}
   if(tela==14){flag2=true;
                 pp.play();
     pontos=pontos+125;
               cer.play();}
   if(tela==16){
         flag2=true;
         pp.play();
          err.play(); }
    if(tela==18){
      flag2=true;
      pp.play();
      err.play();
    }
  }
  if(dist(387,centroY,mouseX,mouseY)<45){
    if(tela ==2){flag3=true;
                 pp.play();
                 err.play();}
    if(tela==6){flag3=true;
     pp.play();
     err.play();}
    if(tela==8){flag3=true;
                pp.play();
                err.play();}
    if(tela==10){flag3=true;
                pp.play();
               pontos=pontos+125;
                cer.play();} 
   if(tela==12){flag3=true;
                pp.play();
                err.play();}
   if(tela==14){flag3=true;
                pp.play();
                err.play();} 
   if(tela==16){
    flag3=true;
    pp.play();
    cer.play();
   pontos=pontos+125;}
   if(tela==18){
     flag3=true;
     pp.play();
      err.play();
   }
  }
}
function preload() {
  s1=loadImage('1s.png');
  s2=loadImage('2s.png');
  s3=loadImage('3s.png');
  cer=loadSound('cer.mp3')
  err=loadSound('err.mp3')
  pp=loadSound('pop.wav')
  img = loadImage('a.png')
  img2=loadImage('340.svg')
  img3=loadImage('Sa.png')
  img4=loadImage('back.png');
  b1=loadImage('1.png')
  b2=loadImage('2.png')
  b3=loadImage('b3.png')
  mira=loadImage('mira.png')
  mirav=loadImage('mirav.png')
  vba[0]=loadImage('ba1.png')
  vba[1]=loadImage('ba2.png')
  vba[2]=loadImage('ba3.png')
  vba[3]=loadImage('ba4.png')
  vba[4]=loadImage('ba5.png')
 vba[5]=loadImage('ba6.png')
  vbc[0]=loadImage('bc1.png')
   vbc[1]=loadImage('bc2.png')
   vbc[2]=loadImage('bc3.png')
   vbc[3]=loadImage('bc4.png')
   vbc[4]=loadImage('bc5.png')
   vbc[5]=loadImage('bc6.png')
      vbv[0]=loadImage('bv1.png')
      vbv[1]=loadImage('bv2.png')
      vbv[2]=loadImage('bv3.png')
      vbv[3]=loadImage('bv4.png')
      vbv[4]=loadImage('bv5.png')
      vbv[5]=loadImage('bv6.png')
     inc=loadImage('inc.png')
      co=loadImage('correto.png')
     b4=loadImage('bve1.png');
  vbve[0]=loadImage('bve1.png')
  vbve[1]=loadImage('bve2.png')
  vbve[2]=loadImage('bve3.png')
  vbve[3]=loadImage('bve4.png')
  vbve[4]=loadImage('bve5.png')
  vbve[5]=loadImage('bve6.png')
        vbam[0]=loadImage('bam1.png')
        vbam[1]=loadImage('bam2.png')
        vbam[2]=loadImage('bam3.png')
        vbam[3]=loadImage('bam4.png')
        vbam[4]=loadImage('bam5.png')
        vbam[5]=loadImage('bam6.png')
  b5=loadImage('bam1.png')
  ba1=loadImage('ba11.png')
  bc1=loadImage('bc11.png')
  c1=loadImage('bc11.png')
  v1=loadImage('bve1.png')
  a1=loadImage('ba1.png')
  v2=loadImage('bv1.png')
  a2=loadImage('ba1.png')
  c2=loadImage('bc1.png')
  q=loadImage('bam1.png')
  w=loadImage('bv1.png')
  e=loadImage('ba1.png');
  t=loadImage('ba1.png');
  y=loadImage('bam1.png');
  u=loadImage('bc1.png');
  a=loadImage('bv1.png');
  s=loadImage('bve1.png');
  d=loadImage('ba1.png')
}
function setup() {
  createCanvas(500, 500);
  frameRate(30);
}
function draw() {
textStyle(NORMAL);
  if(flag3==true){
  if(tela==2){ b3=vba[i];
    i++
    if(i>5){tela=5}}
  if(tela==6){
    if(f3==true){
      b4=vbve[k]
      k++;
      if(k>5){
        tela=7;}}
    if(f3==false){
         b3=vba[k];
         k++;
       if(k>5){
         tela=7}        
       }}
  if(tela==8){
       bc1=vbc[j];
       j++;
       if(j>5){
         tela=9;}}
  if(tela==10){
    c1=vbc[l];
    l++;
    if(l>5){
      tela=11;}
  }
  if(tela==12){
   c2=vbc[h];
   h++;
   if(h>5){tela=13}
 }
  if(tela==14){
    e=vba[f];
    f++;
    if(f>5){
      tela=15;
    }
  }
  if(tela==16){
      u=vbc[m];
      m++;
      if(m>5){
        tela=17}}
  if(tela==18){
    d=vba[v];
    v++;
    if(v>5){
      tela=19}}
  }
  if(flag2==true){
     if(tela==2){
    b2=vbv[i];
    i++
    if(i>5){tela=5}}
     if(tela==6){
     if(f2==true){
       b4=vbve[k];
       k++;
       if(k>5){
         tela=7;}}
     if(f2==false){
      b2=vbv[k];
       k++;
       if(k>5){
         tela=7;}}
      }
     if(tela==8){
       b5=vbam[j];
       j++;
       if(j>5){
         tela=9;}}
     if(tela==10){
    a1=vba[l];
    l++;
    if(l>5){
      tela=11;
   }   }
     if(tela==12){a2=vba[h];
    h++;
     if(h>5){tela=13;}}
     if(tela==14){
      w=vbv[f];
      f++;
      if(f>5){
        tela=15;
      }
    }
     if(tela==16){
      y=vbam[m];
      m++;
      if(m>5){
        tela=17}}
     if(tela==18){
       s=vbve[v];
       v++;
       if(v>5){
         tela=19;
       }
     }
  }
  if(flag1==true){
    if(tela==2){b1=vbc[i];
    i++;
    
    if(i>5){tela=5}
   }
    if(tela==6){
     if(f1==true){
       b4=vbve[k]
       k++;
       if(k>5){tela=7}}
      if(f1==false){
        b1=vbc[k];
        k++;
        if(k>5){
          tela=7;
        }
      }
     }   
   if(tela==8){
       ba1=vba[j];
       j++;
       if(j>5){
         tela=9;}}
    if(tela==10){
    v1=vbve[l];
    l++;
    if(l>5){
      tela=11;}}
    if(tela==12){v2=vbv[h];
   h++;
      if(h>5){
        tela=13;
      }}
    if(tela==14){
         q=vbam[f];
         f++;
      if(f>5){
        tela=15;
      }
    }
    if(tela==16){
      t=vba[m];
      m++;
      if(m>5){
        tela=17
      }
    }
    if(tela==18){
      a=vbv[v];
      v++;
      if(v>5){
        tela=19;
      }
    }
  } 
  
  if(tela==0){
    background(255);
    textSize(20);
    strokeWeight(1);
    stroke(10);
    fill(20);
    text("Instruções: clique com o botão esquerdo\n no balão que corresponde à fração\n geratriz na sua forma decimal.\n OBS:Não use calculadura! \n Dica:multiplique a fração por um número que\n transforme o denominador em 10 ou 100.",250,100);
    if(keyCode==27 && tela==2){
      tela=1
    }
       
     if(mouseX>300 && mouseX<500 && mouseY>370 && mouseY<430){
    fill(0,255,0);
   noStroke()
    rect(300,370,200,60,20);
       if(mouseIsPressed){
         tela=2;
       }
       
   } else {
       noStroke();
    fill(20);
    rect(300,370,200,60,20);
   }
    
     strokeWeight(2)
    stroke(255);
    fill(255);
    textSize(28)
    text("CONTINUAR",400,410);
    f=0
    v=0
    k=0
    i=0
    j=0
    l=0
    h=0
    g=0
    x=0
    b=0
    cont=0
    cont1=0
    cont3=0
   cont4=0
    cont5=0
    cont6=0;
    m=0;
    pontos=0;
  } // instruções iniciais
  if(tela==1){
    background(img)
  textAlign(CENTER);
    textSize(46);
    textFont('Georgia')
   
  stroke(20);
  fill(0,0,150);
  rect(30,50,440,70,150)
  
    fill(0,255,0);
    noStroke();
    text("Convertendo Frações",250,100);
    
    stroke(20);
    fill(20);
  rect(xMenu,yMenu1,largura,altura,6)
  
    fill(200);
    noStroke();
    text("Jogar",245,193)
  
  stroke(20);
  fill(20);
  rect(xMenu,yMenu2,largura,altura,6)
  
    fill(200);
    noStroke();
    text("Instruções",249,295)
    
  stroke(20);
  fill(20);
  rect(xMenu,yMenu3,largura,altura,6)
  
  fill(200);
    noStroke();
    text("Créditos",245,395)
  
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura){
    stroke(20);
    fill(0,255,0);
  rect(xMenu,yMenu1,largura,altura,6)
  
    fill(1);
    noStroke();
    text("Jogar",245,193)
    
    if(mouseIsPressed){
      tela=0    }
  }
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
     stroke(20);
  fill(0,255,0);
  rect(xMenu,yMenu2,largura,altura,6)
  
    fill(1);
    noStroke();
    text("Instruções",249,295)
  
   if(mouseIsPressed){
      tela=3
  }}
  if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
      stroke(20);
  fill(0,255,0);
  rect(xMenu,yMenu3,largura,altura,6)
  
  fill(1);
    noStroke();
    text("Créditos",245,395)
  
   if(mouseIsPressed){
      tela=4
  }

  
  }
    
  } // menu
  if(tela==2){ 
  background(img4)
  image(b2,190,130,120,170)
  image(b1,50,130,120,170)
  image(b3,320,130,120,170)
 textSize(30);
      text("Pontos: " + pontos,100,50)
  strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("3\n—\n5",245,41)
    
if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,6",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,35",250,180);}
  
  if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,3",385,180);}

  if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)
    }
    
  } // level 1
  if(tela==3){
  background(img);
  stroke(100);
  fill(0,0,255);
  rect(30,50,440,70,150)
  
    fill(250,0,0);
    textSize(50);
    noStroke();
    text("Instruções",250,104);
    
    stroke(10);
    fill(255);
    rect(55,130,400,350,20);
    
     fill(20);
    textSize(18)
    noStroke();
    text("Série:6° Ano Fundamental\n Habilidade: (EF06MA08)Reconhecer que \nos números racionais positivos podem ser \nexpressos nas formas fracionária e decimal,\nestabelecer relações entre essas \n representações,passando de uma \nrepresentação para outra, e relacioná-los \na pontos na reta numérica \nO Jogador receberá um número na forma \n de fração,e deverá atirar um dardo no balão \n que contiver o número dado na forma \n decimal,lembre-se que a fração sempre \n estará na sua forma irredutível. \n Você pode pedir uma dica,porém perderá \n  pontos na pontuação final.",250,150);
  
    
  image(img2,395,420,90,90)
    
    if(mouseX>380 && mouseX<500 && mouseY>410 && mouseY<500 && mouseIsPressed) {
      tela=1;
    }
if(mouseX>380 && mouseX<500 && mouseY>410 && mouseY<500)
{
  stroke(10);
  fill(150);
  rect(350,350,110,60,20);

  fill(10)
  textSize(24);
  noStroke();
  textFont('Georgia');
  text("VOLTAR",404,390)

}  
    
  
  } // instruções
  if(tela==4){
     background(img);
     stroke(10);
     fill(250);
     rect(105,20,300,60,30)
     image(img3,100,100,220,300);
   
     fill(20);
     textSize(40)
     noStroke();
     text("Créditos",250,67)
  
     stroke(10);
     fill(250);
     rect(50,400,400,100,20)
     
     fill(2);
     textSize(20)
     noStroke();
     text("Nome:Samuel Lucas Ribeiro Dos Santos\n Função:programador",250,440);
     
      image(img2,395,420,90,90)
    
    if(mouseX>380 && mouseX<500 && mouseY>410 && mouseY<500 && mouseIsPressed) {
      tela=1;
    }
if(mouseX>380 && mouseX<500 && mouseY>410 && mouseY<500)
{
  stroke(10);
  fill(150);
  rect(350,350,110,60,20);

  fill(10)
  textSize(24);
  noStroke();
  textFont('Georgia');
  text("VOLTAR",404,390)

}  
} // créditos
  if(tela==5){
     background(img4);
    if(flag2==true){
     flag2=false;
      f2=true}
    if(f2==true){
     textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
     cont1++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
    if(cont1>50 && tela==5){
      tela=6;}
    
    }
     
    if(flag3==true){
     flag3=false;
     f3=true}
    if(f3==true){
     textSize(30);
      stroke(20);
      fill(200,0,0);
      text("RESPOSTA ERRADA",230,200)
      image(inc,370,160,70,70)
       textSize(30);
      text("Pontos: " + pontos,100,50);
     cont1++;
    if(cont1>50 ){
      tela=6;}}
    
  if(flag1==true){
     flag1=false;
     f1=true}
    if(f1==true){
     textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
    cont1++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(cont1>50){
      tela=6;}
    }
   } // resposta level 1
  if(tela==6){
    background(img4);
    image(b2,190,130,120,170)
    image(b1,50,130,120,170)
    image(b3,320,130,120,170)
    
    if(f1==true){
      image(b4,50,130,120,180)
    }
    if(f2==true){
      image(b4,190,130,120,180)
    }
    if(f3==true){
      image(b4,320,130,120,180)
    }
  
    textSize(30);
      text("Pontos: " + pontos,100,50)
  strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("13\n—\n20",245,41)
    
 if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,7",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,65",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("2,3",385,180);}

  if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)
    
  } // level 2
 } // level 2
  if(tela==7){
    background(img4);
    if(flag1==true){
       textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont3++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont3>50){
        tela=8;
        flag1=false;
      }
    }
    if(flag2==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
      cont3++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(cont3>50){
      tela=8;
    flag2=false;}
    }
    if(flag3==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont3++;
      textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont3>50 && tela==7){
        tela=8;
        flag3=false
      }
  }} // resposta level 2
  if(tela==8){
    background(img4);
   image(b5,190,130,120,170)
   image(ba1,50,130,120,170)
   image(bc1,320,130,120,170)
    
    strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("28\n—\n25",245,41)
    
    if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,12",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,85",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,46",385,180);}
    
    if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)}
   
    text("Pontos: " + pontos,100,50)
  } // level 3
  if(tela==9){
   background(img4);
    if(flag2==true){
       textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont4++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont4>50){
        tela=10;
        flag2=false;
      }
    }
    if(flag1==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
      cont4++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(cont4>50){
      tela=10;
    flag1=false;}
    }
    if(flag3==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont4++;
      textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont4>50){
        tela=10;
        flag3=false}
  }} // resposta level 3
  if(tela==10){
     background(img4);
   image(a1,190,130,120,170)
   image(v1,50,130,120,170)
   image(c1,320,130,126,170)
    
    strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("9\n—\n4",245,41)
    
    if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("3,15",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("2,54",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("2,25",385,180);}
    
    if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)}
   
    text("Pontos: " + pontos,100,50)
  } // level 4
  if(tela==11){
    background(img4);
    if(flag1==true){
       textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont5++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont5>50){
        tela=12;
        flag1=false;
        l=0
      }
    }
    if(flag3==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
      cont5++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(cont5>50){
      tela=12;
    flag3=false;}
    }
    if(flag2==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont5++;
      textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont5>50){
        tela=12;
        flag2=false}
  } } //resposta level 4
  if(tela==12){
  background(img4);
   image(v2,50,130,120,170)
   image(a2,190,130,120,170)
   image(c2,320,130,126,170)
    
    strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("7\n—\n5",245,41)
    
    if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,2",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,4",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,14",385,180);}
    
    if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)}
      text("Pontos: " + pontos,100,50)
} //level 5
  if(tela==13){
    background(img4);
    if(flag1==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont6++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont6>50){
        tela=14;
        flag1=false;
        l=0
      }
    }
    if(flag2==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
      cont6++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(cont6>50){
      tela=14;
    flag2=false;}
    }
    if(flag3==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      cont6++;
      textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(cont6>50){
        tela=14;
        flag3=false}
  } } // resp level 5
  if(tela==14){
  background(img4);
   image(q,50,130,120,170)
   image(w,190,130,120,170)
   image(e,320,130,126,170)
    
    strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("21\n—\n50",245,41)
    
    if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,62",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,42",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,22",385,180);}
    
    if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)}
      text("Pontos: " + pontos,100,50)
} // level 6
  if(tela==15){
    background(img4);
    if(flag1==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      g++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(g>50){
        tela=16;
        flag1=false;
      }
    }
    if(flag2==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
     g++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(g>50){
      tela=16;
    flag2=false;}
    }
    if(flag3==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      g++;
      textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(g>50){
        tela=16;
        flag3=false;}
  } } // resp level 6
  if(tela==16){
   background(img4);
   image(t,50,130,120,170)
   image(y,190,130,120,170)
   image(u,320,130,126,170)
    
    strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("62\n—\n200",245,41)
    
    if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("1,24",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,88",250,180);}
 if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,31",385,180);}
    
    if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)}
      text("Pontos: " + pontos,100,50)
    
 } // level 7
  if(tela==17){
    background(img4);
    if(flag1==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
     x++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(x>50){
        tela=18;
        flag1=false;
      }
    }
    if(flag2==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
     x++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(x>50){
        tela=18;
        flag2=false;}
    }
    if(flag3==true){
      textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
     x++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(x>50){
      tela=18;
    flag3=false;}
    
  } }  //resp level 7
  if(tela==18){ 
  background(img4)
  image(s,190,130,120,170)
  image(a,50,130,120,170)
  image(d,320,130,120,170)
 textSize(30);
      text("Pontos: " + pontos,100,50)
  strokeWeight(5);
  stroke(20);
  fill(0,255,0);
  rect(194,10,100,115,30);
  
  textSize(27);
  text("1\n—\n100",245,41)
    
if(flag1==false){strokeWeight(6);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,01",110,180);
                }
 if(flag2==false){ strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,1",250,180);}
  
  if(flag3==false){strokeWeight(7);
  stroke(0,0,255);
  fill(255,0,0);
  textSize(28);
  text("0,001",385,180);}

  if(dist(112,centroY,mouseX,mouseY)<45 || dist(250,centroY,mouseX,mouseY)<45 || 
  dist(387,centroY,mouseX,mouseY)<45  ){
    image(mirav,mouseX-30,mouseY-30,65,65)} else{
      image(mira,mouseX-25,mouseY-23,50,50)
    }
    
  } // level 8
  if(tela==19){
    background(img4);
    if(flag1==true){ textSize(27);
      stroke(20);
      fill(0,200,0);
      text("PARABÉNS! CERTA RESPOSTA!",230,200);
      image(co,420,160,70,70)
     b++;
      textSize(30);
      text("Pontos: " + pontos,100,50);
    if(b>50){
      tela=20;
    flag1=false;}
  }
    if(flag2==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
   b++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(b>50){
        tela=20;
        flag2=false;}
    }
    if(flag3==true){
      textSize(30);
      stroke(20);
      fill(240,0,0);
      text("RESPOSTA ERRADA ",230,200)
      b++;
       textSize(30);
      text("Pontos: " + pontos,100,50)
      image(inc,370,160,70,70);
      if(b>50){
        tela=20;
        flag3=false;}
    
  } }  //resp level 8
  if(tela==20){
     background(img4);
     textSize(30);
     fill(0,255,0);
     strokeWeight(5);
    stroke(20);
    text("Pontos: " + pontos,230,50)
  
    if(pontos>=875){ 
        stroke(10)
      fill(0,255,0);
      textSize(40);
      text("Excelente,parabéns!",230,150);
       image(s3,130,110,230,230);
     }
    if(pontos>=500 && pontos<875){
      stroke(10)
      fill(0,255,0);
      textSize(40);
      text("Bom!",230,150);
      image(s2,130,110,230,230)
    }
    if(pontos<500){
      stroke(10)
      fill(230,0,0);
      textSize(40);
      text("Pode melhorar! :/",230,150);
      image(s1,130,110,230,230)
    }
    stroke(10);
    fill(255);
    rect(40,390,180,40,7);
    textSize(20)
    text("Tentar Novamente",130,415);
    
    rect(330,390,100,40,7);
    textSize(20);
    text("Menu",380,415)
    
    if(mouseX>=40 && mouseX<=220 && mouseY>=390 && mouseY<=430){
      noStroke();
      fill(0,200,0);
      rect(40,390,180,40,7);
      fill(20)
      text("Tentar Novamente",130,415);
      if(mouseIsPressed){
        tela=0;
      }
    }
    if(mouseX>=330 && mouseX<=430 && mouseY>=390 && mouseY<=430){
      noStroke();
      fill(0,200,0);
      rect(330,390,100,40,7);
      fill(20)
      text("Menu",380,415);
      if(mouseIsPressed){
        tela=1;
      }
    }
  } // tela final
}

