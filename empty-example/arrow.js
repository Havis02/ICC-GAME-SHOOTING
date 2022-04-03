function Arrow() {
    this.x = width/2;
    this.xdir = 0;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
       rect(this.x, height-30, 30, 30); 

    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }
    this.move = function(dir) {
        this.x += this.xdir*5;
    }
}