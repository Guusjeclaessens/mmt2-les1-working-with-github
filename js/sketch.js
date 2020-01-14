
function setup() {
  // put setup code here
  createCanvas (windowWidth,windowHeight);
 
}

function draw() {
 background(240);
kleur = mouseX
kleur = map(kleur, 0, width, 0, 255)
console.log(kleur);



//  horizontale lijnen
strokeWeight (1);
stroke (0)
 line(0,0,width,0);

 strokeWeight (1);
 stroke (0)
 line(0,height,width,height);

 strokeWeight (1);
 stroke(0)
 line(0,height/3,width,height/3);

 strokeWeight (10);
 stroke(random(255),random(255),random(255));
 line(0,height/3*2,width,height/3*2);


// verticale lijnen
stroke (0)
line(0,0,0,height);

stroke (0)
strokeWeight (1)
line(width,0,width,height);

stroke (0)
strokeWeight (1)
line(width/4,0,width/4,height);

stroke (0)
strokeWeight (5)
line(width/2,0,width/2,height);

stroke (0)
strokeWeight (1)
line(3/4*width,0,3/4*width,height);

fill(kleur,0,0);
rect(width/2,0,width/4,height/3);

fill(0,255,0)
rect(width/4,height/3,width/4,height/3);

fill(mouseY,0,mouseY,)
rect(width*3/4,height*2/3,width/4,height/3);
}