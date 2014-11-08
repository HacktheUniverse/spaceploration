$(document).ready(function(){

  var planetNum = 0;
  $('.planet').css("background-image", "url(./images/texture_4.png)");

  $('input').on('keyup', function() {
    var earthWeight = $(this).val();
    if (!isNaN(earthWeight)){
      checkGravity(planetNum, earthWeight);
    }
  });

  $('.newPlanet').on('click', function() {
    if (planetNum < gravityTypes.length-1) {
      planetNum++;
    } else {
      planetNum = 0;
    }
    $('.planet').css("background-image", "url(./images/" + gravityTypes[planetNum].texture + ")");
    $('.thisPlanet').html(gravityTypes[planetNum].name);
    checkGravity(planetNum, $('input').val());
  })

});