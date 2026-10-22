function setup() {
  createCanvas(600, 600);//Crea un área de dibuix de 600 pixels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. setup és la configuració o característiques del nostre codi
}

function draw() {//draw significa dibuixar
  background(128, 128, 128);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc
  let canvigran= sin(frameCount*0.1)*20;//genera números de 20 a -20 sense parar
  print("canvi gran: "+canvigran)
   let canvimitja= sin(frameCount*0.1)*15;//genera números de 15 a -15 ordenats sense parar
  print("canvi mitja: "+canvigran)
  let canvipetit= sin(frameCount*0.1)*8;//genera números de 8 a -8 ordenats sense parar
  print("canvi petit: "+canvipetit)
  let canvimoltgran= sin(frameCount*0.1)*127;//genera números entre 127 a -127 ordenats i sense parats
  print("canvi moltgran: "+canvimoltgran)
  text("canvigran: "+canvigran,20,20);
  frameRate(90)
  strokeWeight(1);
  fill(34-canvimoltgran*2/2,217-canvimoltgran*2,238+canvimoltgran*2);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red), el segon numero es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB
  ellipse(300,300,300,350+canvigran);//Es la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipseen píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(255,255,51);//color dels ulls
    ellipse(350,250,50,50+canvigran);//és l'ull dret perquè és 350 de X al centre
  ellipse(250,250,50,50+canvigran);//és l'ull esquerre perquè és 250 píxels de X del centre
  fill(255,51,51);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  arc(300,350,100,50+canvigran,0,PI);//boca
  noFill();//no omplis de color la cella.
  strokeWeight(4);
  arc(250,230,80,35+canvigran,PI,0);//cella esquerra
  strokeWeight(4);
  arc(350,230,80,35+canvigran,PI,0);//cella dreta: els dos primers números són la X
  }
