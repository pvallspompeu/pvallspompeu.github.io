function setup() {
  createCanvas(600, 600);//Crea un área de dibuix de 600 pixels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. setup és la configuració o característiques del nostre codi
}
//farem canvis aleatoris amb random i canvis suaus amb noise
function draw() {//draw significa dibuixar
 let canvigran= random(0,255);
  let canvisuau=noise(0.001*frameCount)*25;
   let canvisuau2=noise(0.001*frameCount+10000)*127;
  background(canvisuau);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc
  let tremolor=random (0,10);
  let tremolorsuau=noise(0.001*frameCount)*10;
  print(tremolorsuau);
  strokeWeight(canvisuau);
  fill(34+canvigran,217-canvigran,238-canvisuau);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red), el segon numero es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB
  ellipse(300+tremolor,300,300,350);//Es la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipseen píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(255-canvigran,255,51+canvigran);//color dels ulls
    ellipse(350+tremolor,250,50,50);//és l'ull dret perquè és 350 de X al centre
  ellipse(250+tremolor,250,50,50);//és l'ull esquerre perquè és 250 píxels de X del centre
  fill(255-canvigran,51+canvigran,51);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  arc(300+tremolor,350,100,50,0,PI);//boca
  noFill();//no omplis de color la cella
  strokeWeight(4);
  arc(250+tremolor,230,80,35,PI,0);//cella esquerra
  strokeWeight(4);
  arc(350+tremolor,230,80,35,PI,0);//cella dreta: els dos primers números són la X
  }
