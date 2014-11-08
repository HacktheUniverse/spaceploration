var Star = function(){
  this.diameter = 50;
};

Star.prototype.drawMass = function() {
  $('.star').width(this.diameter);
  $('.star').height(this.diameter);
}


$(document).ready(function(){
  var star = new Star();

  $('.start').on('click', function() {
    star.drawMass();
  });
});