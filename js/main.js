$(document).mousemove(function(e){
    $("#space-cat").animate({left:e.pageX, top:e.pageY}, 1000);
});


//var $mouseX = 0, $mouseY = 0;
//var $xp = 0, $yp =0;

//$(document).mousemove(function(e){
    //$mouseX = e.pageX;
    //$mouseY = e.pageY;
//});

//var $loop = setInterval(function(){
//// change 12 to alter damping higher is slower
//$xp += (($mouseX - $xp)/12px);
//$yp += (($mouseY - $yp)/12px);
//$("#space-cat").css({left:$xp, top:$yp});
//}, 30);
