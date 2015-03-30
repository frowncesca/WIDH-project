// JS FOR ACCORDION MENU - how do I get span to change colour too? 
$(document).ready(function() {

	
    $("h2#1900").addClass("activeTitle");
    $("h2#1900 span").addClass("activeTitle");
    $("#accordion ul.openDefault").addClass("active");
  
    $('body').animate({scrollTop: 0}, 1000);
    if (document.documentElement.clientWidth > 400){
    	  $("#ethelReed").addClass("activeDesigner");
	}
});

$("h2").click(function(e){
	console.log("hit");
	$("h2").removeClass("activeTitle");
	$("span").removeClass("activeTitle");
	$(this).addClass("activeTitle");
	$(this).find("span").addClass("activeTitle"); 

	$(this).toggleClass("active");
	$("#accordion ul").slideUp();
	if(!$(this).next().is(":visible")) {
		$(this).next().slideDown();
	}



	if(document.documentElement.clientWidth > 400){
		
		var decade = $(this).attr("id");
		var defaultDesigner = $("a." + decade);
		defaultDesigner.addClass("activeDesigner").siblings().removeClass("activeDesigner");
		defaultContent = $('.scroll-' + $(this).attr('id'));
		console.log(defaultContent);
		var b = defaultContent.offset().top;
		$('body').animate({scrollTop: b}, 1000);
		// defaultContent.addClass("open").siblings().removeClass("open");
		}



});





$(".designer").click(function(e){
	e.preventDefault();
	var a = $(e.target.attributes["0"].value);
	var b = a.offset().top;
	$('body').animate({scrollTop: b}, 1000);
	$(".designer").removeClass("activeDesigner");
	$(this).addClass("activeDesigner");

	if(document.documentElement.clientWidth < 400){
		$(".backToTop").addClass("backToTopOpen");
	// } else if (document.documentElement.clientWidth > 400) {
	// 	$(".backToTop").removeClass("backToTopOpen");
	}

});


// var designerNamePosition = $(e.target.attributes["0"].value);
// 	$("#diamond").animate({scrollTop: });




