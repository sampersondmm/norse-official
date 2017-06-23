var canvas;

function setup() {
    canvas = createCanvas(500,900);
    canvas.position(100,300);

}

function draw() {
    background(200);
    
  //rect(200,150,40,500);//whole blade
  rect(210,80,20,60);//handle----
  line(205,80,235,80);//pommel line----
  arc(220,80,30,40,-PI,0);//pommel arc
  line(216,150,218,500);//fuller left---
  line(224,150,222,500);//fuller right
  arc(220,500,4,10,0,PI);//fuller arc
  line(200,150,205,600);//left edge---
  line(240,150,235,600);//right edge
  line(205,600,220,650);//left tip
  line(235,600,220,650);//right tip
  //rect(190,140,60,10);//guard---
  noFill();
  arc(220,160,100,20,-PI + PI/30,-PI/30);//guard bottom arc
  
  arc(220,155,100,30,-PI + PI/30,-PI/30);//guard top arc
  fill(255);
}