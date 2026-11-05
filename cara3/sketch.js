
function setup() {
  createCanvas(600, 600);//Crea un área de dibuix de 600 pixels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. setup és la configuració o característiques del nostre codi
}

function draw() {//draw significa dibuixar
  //mouseX=300;mouseY=300
  background(0);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc
  strokeWeight(1);
  fill(mouseX-234,mouseY-65,232);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red), el segon numero es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB
  ellipse(mouseX,mouseY,300,350);//Es la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipseen píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
 
  fill(mouseX-45,mouseY-45,255);//color dels ulls
    ellipse(mouseX+50,mouseY-50,50,50);//és l'ull dret perquè és 350 de X al centre
  ellipse(mouseX-50,mouseY-50,50,50);//és l'ull esquerre perquè és 250 píxels de X del centre
  fill(mouseX-45,mouseY-300,0);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  arc(mouseX,mouseY+50,100,50,0,PI);//boca
  noFill();//no omplis de color la cella
  strokeWeight(4);
  arc(mouseX-50,mouseY-70,80,35,PI,0);//cella esquerra
  strokeWeight(4);
  arc(mouseX+50,mouseY-70,80,35,PI,0);//cella dreta: els dos primers números són la X
   fill(0,0,0);//es el color de les pupiles dels ulls
  circle(mouseX+50,mouseY-50,10);//es la pupila de l'ull dret
  circle(mouseX-50,mouseY-50,10);//es la pupil de l'ull esquerre
  }
