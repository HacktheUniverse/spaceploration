var Star = function(){
  this.diameter = 20;
  this.growable = false;
  this.gameOver = false;
};

Star.prototype.drawMass = function() {
  $('.star').width(this.diameter);
  $('.star').height(this.diameter);
}

$(document).ready(function(){
  var star = new Star();

  $('.start').on('click', function() {
    star.drawMass();
    star.growable = true;
  });

  $(document).on('keydown', function(e) {
    if (e.which === 32 && star.growable === true && star.gameOver === false) {
      star.diameter += 2;
      star.drawMass();
    }
  });

  $(document).on('keyup', function(e) {
    if (e.which === 32 && star.growable === true && star.gameOver === false) {
      star.gameOver = true;
    }
  });
});