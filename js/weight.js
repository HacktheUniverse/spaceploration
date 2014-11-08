$(document).ready(function(){

  var planetNum = 0;

  $('input').on('keyup', function() {
    var earthWeight = $(this).val();
    if (!isNaN(earthWeight)){
      checkGravity(planetNum, earthWeight);
    }
  });

  $('.newPlanet').on('click', function() {
    console.log('click');
    if (planetNum < gravityTypes.length) {
      planetNum++;
    } else {
      planetNum = 0;
    }
    $('.thisPlanet').html(gravityTypes[planetNum].name);
  })

});