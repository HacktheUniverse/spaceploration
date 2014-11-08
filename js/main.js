$(document).mousemove(function(e){
    $("#space-cat").stop().animate({left:e.pageX, top:e.pageY});
});
