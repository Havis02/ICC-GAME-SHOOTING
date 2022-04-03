function Arrow() {
    this.x = width/2;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
       rect(this.x, height-30, 30, 30); 

    }
    this.move = function(dir) {
        this.x += dir*15;
    }
}