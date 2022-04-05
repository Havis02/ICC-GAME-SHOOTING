 function Drop(x, y) {
     this.x = x;
     this.y = y;

     this.show = function() {
         fill(0, 255, 0);
         ellipse(this.x, this.y, 6, 16);
     }

     this.move = function() {
        this.y = this.y - 10;
     }
 }