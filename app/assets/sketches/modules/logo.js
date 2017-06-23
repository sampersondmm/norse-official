function setup() {
    createCanvas(700,750);
}

function draw() {
    background(255,0,0);
    fill(255);
    rect(300,340,30,220);//thin verticle-1
    ellipse(300,450,210,210);//big circle
    fill(0, 0, 0);//black
    ellipse(300,450,140,140);//inner circle
    fill(255,255,255);//white
    triangle(130,430,290,430,290,270);//triangle
    rect(300,340,30,220);//thin verticle-1
    rect(310,320,80,150);//top rectangle
}