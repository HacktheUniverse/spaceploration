var Star = function(){
  this.diameter = 20;
  this.gameOver = false;
};

Star.prototype.drawMass = function() {
  $('.star').width(this.diameter);
  $('.star').height(this.diameter);
}

$(document).ready(function(){
  var star = new Star();

  $(document).on('keydown', function(e) {
    if (e.which === 32 && star.gameOver === false) {
      star.drawMass();
      star.diameter += 2;
      star.drawMass();
    }
  });

  $(document).on('keyup', function(e) {
    if (e.which === 32 && star.gameOver === false) {
      star.gameOver = true;
      checkStarType(star.diameter);
    }
  });
});