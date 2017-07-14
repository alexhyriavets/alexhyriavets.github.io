$(document).ready(function() {

	// $('.sandwich').click(function() {

	// 	$('.header_text_wrap').css('opacity', '1');
	//     $(".sandwich").toggleClass("active");
	//     $('.nav').slideToggle();
	//     $('.social').slideToggle();


	//  	if ($('.sandwich').hasClass("active")) {
	//  		$('.header_text_wrap').css('opacity', '.1');
	//  	}

	//     $(window).resize(function() {
	// 		var wid = $(window).width();
	// 		 if(wid > 760 && $('.nav').is(':hidden') && $('.social').is(':hidden')) {
	// 	  	  $('.nav').removeAttr('style');
	// 	  	  $('.social').removeAttr('style');
	// 		 }
	// 	});
	// });
	$(document).ready(function(){
		var touch = $('.sandwich');
		var menu = $('.nav');
		 
		$(".sandwich, .page-header__list").click(function() {
   			$(".sandwich").toggleClass("active");
   		//	$('.social').slideToggle();
		});

		$(touch).on('click', function(e) {
		    e.preventDefault();
		    menu.slideToggle();
		});
		
		$(window).resize(function(){
		    var wid = $(window).width();
		    if(wid > 760 && menu.is(':hidden')) {
		        menu.removeAttr('style');
		    }
		});
	});
	$('#portfolio').waypoint(function() {
		$('#portfolio img').addClass('animated fadeInLeft');
		$('.portfolio_text').addClass('animated fadeInRight');
	}, {offset: '100%'});

	$('#about').waypoint(function() {
		$('#about').addClass('animated bounceInUp');
	}, {offset: '100%'});

	$('#our_team').waypoint(function() {
		$('#our_team .team_member').addClass('animated zoomIn');
	}, {offset: '100%'});

	$('#footer').waypoint(function() {
		$('#footer .social .fa').addClass('animated rotateIn');
	}, {offset: '100%'});


	// $(".header_text_wrap").addClass("animated fadeIn");
	$(".logo").addClass("animated flipInY");
	$(".top_nav").addClass("animated fadeInDown");

});
