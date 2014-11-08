function randomize() {
	console.log("randomize");
	var which_link = Math.floor(Math.random() * 2);

	var page1 = "./star.html";
	var page2 = "./spaceWeight.html";

	if (which_link === 0) {
		window.location = page1;
	}

	else {
        window.location = page2;
	}
}

$(document).ready(function(){

	$(document).mousemove(function(e){
	    $("#space-cat").stop().animate({left:e.pageX, top:e.pageY});
	});

	$("img").on("click", function(){
		console.log("click");
		randomize();
	});

});