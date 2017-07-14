$('document').ready(function() {

	
	

	$(".nav a").mPageScroll2id({
		
		onComplete:function(){
			if ($(window).width() > 768) {
				$('.nav').css("display", "block");
			}
		}
	});


	$("#sandwich, .nav").click(function() {
 		$("#sandwich").toggleClass("active");
 		$('.nav').slideToggle();

 		$(window).resize(function() {
			var wid = $(window).width();
			 if(wid > 760 && $('.nav').is(':hidden')) {
		  	  $('.nav').removeAttr('style');
			 }
		});
	});

	 $('.head-image').parallax({imageSrc: 'img/header-bg.jpg'});


});
