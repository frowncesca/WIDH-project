// JS FOR ACCORDION MENU - how do I get span to change colour too? 
$(".infoButton").click(function(){
	console.log("hello");
	$(".infoSection").toggleClass("infoSectionOpen");
});

// $(".scroll").click(function(){
// 	$(document.body).animate({
//     'scrollTop':   $('.timeline').offset().top
// }, 2000);

// });

$("h2.decade").click(function(){
	$("h2").removeClass("activeTitle");
	$("span").removeClass("activeTitle");
	$(this).addClass("activeTitle");
	$(this).find("span").addClass("activeTitle"); 
	// $(this).addClass("activeTitle").siblings().removeClass("activeTitle");
	// $(this).find("span").addClass("activeTitle").siblings().removeClass("activeTitle");	
	// $(this).children("span").addClass("activeTitle").find(span);
	// $(this).toggleClass("active");
	$("#accordion ul").slideUp();
	if(!$(this).next().is(":visible")) {
		$(this).next().slideDown();
	}
	var id = $(this).attr("id");
	console.log("clicked"+ id);
	var defaultContent = $("section." + id);
	var defaultDesigner = $("li." + id);
	defaultContent.addClass("open").siblings().removeClass("open");
	defaultDesigner.addClass("activeDesigner").siblings().removeClass("activeDesigner");

});

//JS FOR CHANGING THE CONTENT WHEN DESIGNER NAME IS CLICKED
$("li.designer").click(function(){
	console.log("hello");
	//make the clicked li active colour
	$(this).addClass("activeDesigner").siblings().removeClass("activeDesigner");
	console.log(this);
	// get id name of element clicked and store in variable
	var item = $(this).attr("id");
	console.log("clicked " + item);
	//get section and add the class name
	var section = $("section."+ item);
	console.log(section);
	section.addClass("open").siblings().removeClass("open");

});

$(".hamburger").click(function(){
	$(".hamburgerNav").toggleClass("hamburgerNavOpen");

});

$(".hamburgerNavButton").click(function(){
	$(".hamburgerNav").toggleClass("hamburgerNavOpen");

});





	
