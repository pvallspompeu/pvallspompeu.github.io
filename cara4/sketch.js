function setup() {
  createCanvas(600, 600);//Crea un área de dibuix de 600 pixels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. setup és la configuració o característiques del nostre codi
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {//draw significa dibuixar
  background(0);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 300);
  print(h);
  strokeWeight(1);
  fill(34+h,217+h,238+h);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red), el segon numero es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB
  ellipse(300,300,300,350+h);//Es la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipseen píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(255,255,51+h);//color dels ulls
    ellipse(350,250,50,50+h);//és l'ull dret perquè és 350 de X al centre
  ellipse(250,250,50,50+h);//és l'ull esquerre perquè és 250 píxels de X del centre
  fill(255+h,51+h,51+h);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  arc(300,350,100,50+h,0,PI);//boca
  noFill();//no omplis de color la cella
  strokeWeight(4);
  arc(250,230,80,35+h,PI,0);//cella esquerra
  strokeWeight(4);
  arc(350,230,80,35+h,PI,0);//cella dreta: els dos primers números són la X
  }
