var arrow;
var drops = [];

function setup() {
  createCanvas(640,640);
  arrow = new Arrow();
  //drop = new Drop(width/2, height/2);
}

function draw() {
  background(0);
  arrow.show();
  arrow.move();
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
  }
}


function keyReleased() {
  if (key != ' ') {
  arrow.setDir(0);
  }
}

function keyPressed() {
 
  if (keyCode === RIGHT_ARROW) {
    arrow.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    arrow.setDir(-1 );
  }
 
}