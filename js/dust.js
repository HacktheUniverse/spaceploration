var Star = function(){
  this.diameter = 20;
  this.gameOver = false;
};

Star.prototype.drawMass = function() {
  $(".star").width(this.diameter);
  $(".star").height(this.diameter);
};

$(document).ready(function() {
  var star = new Star();

  $(document).on("keydown", function(e) {
    if (e.which === 32 && star.gameOver === false) {
      console.log(star.diameter);
      $(".header").removeClass("topMargin");
      loadColor(star.diameter);
      star.drawMass();
      star.diameter += 3;
    }
  });

  $(document).on("keyup", function(e) {
    if (e.which === 32 && star.gameOver === false) {
      star.gameOver = true;
      checkStarType(star.diameter);
      $(".info").removeClass("hidden");
    }
  });

  $("#playAgain").on("click", function() {
    star.diameter = 50;
    star.drawMass();
    star.gameOver = false;
    $(".info").addClass("hidden");
  });
});
