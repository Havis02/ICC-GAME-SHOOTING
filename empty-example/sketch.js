var arrow;

function setup() {
  createCanvas(640,640);
  arrow = new Arrow();
}

function draw() {
  background(0);
  arrow.show();

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    arrow.move(1);
  } else if (keyCode === LEFT_ARROW) {
    arrow.move(-1);
  }
}