$(document).ready(function(){

  var planetNum = 0;

  $('input').on('keyup', function() {
    var earthWeight = $(this).val();
    if (!isNaN(earthWeight)){
      checkGravity(planetNum, earthWeight);
    }
  });

  $('.newPlanet').on('click', function() {
    console.log('length: ' + gravityTypes.length);
    console.log('planetNum' + planetNum);
    if (planetNum < gravityTypes.length-1) {
      planetNum++;
    } else {
      planetNum = 0;
    }
    $('.thisPlanet').html(gravityTypes[planetNum].name);
    checkGravity(planetNum, $('input').val());
  })

});