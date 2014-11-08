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
      $(".header").removeClass("topMargin");
      checkStarType(star.diameter);
      star.drawMass();
      star.diameter += 3;
    }
  });

  $(document).on("keyup", function(e) {
    if (e.which === 32 && star.gameOver === false) {
      star.gameOver = true;
      $(".info").removeClass("hidden");
    }
  });

  $("#playAgain").on("click", function() {
    var classes = $('.star').attr("class");
    var currentClass = classes.split(" ")[1];
    star.diameter = 20;
    star.drawMass();
    star.gameOver = false;
    $( ".star" ).addClass( "brownDwarf" ).removeClass(currentClass);
    $(".info").addClass("hidden");
  });
});
