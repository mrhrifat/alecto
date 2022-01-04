$(document).ready(function(){

	// // Photo Filter
	// let $btns = $('#portfolio .button-group button');

	// $btns.click(function(e){

	// 	$('#portfolio .button-group button').removeClass('active');

	// 	e.target.classList.add('active');


	// 	let selector = $(e.target).attr('data-filter');

	// 	$('#portfolio .grid').isotope({
	// 		filter:selector
	// 	});

	// 	return false;
	// });

	// // Photo Popup
	// $('#portfolio .button-group #btn1').trigger('click');

	// $('#portfolio .grid .test-popup-link').magnificPopup({
	// 	type: 'image',
	// 	gallery:{enabled:true}
	// });


	// //Owl Carousel
	// $('#about-me .carousel-items .owl-carousel').owlCarousel({
	// 	loop:true,
	// 	dots:true,
	// 	autoplay:true,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		544:{
	// 			items:2
	// 		}
	// 	}
	// });

	// AOS Instance
	AOS.init();

	//Navbar
	let nav_offset_top=$('#header').height()-600;

	function navbarFixed(){
		if($('#header').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();

				if(scroll >= nav_offset_top){
					$('#header  .navigation').addClass('topbar');
				}else{
					$('#header .navigation').removeClass('topbar');
				}
			});
		}
	}
	navbarFixed();

});