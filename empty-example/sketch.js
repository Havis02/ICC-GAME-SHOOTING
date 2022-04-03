var arrow;

function setup() {
  createCanvas(640,640);
  arrow = new Arrow();
}

function draw() {
  background(0);
  arrow.show();
  arrow.move();

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