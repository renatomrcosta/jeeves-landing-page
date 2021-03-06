//Ultima HTML5 Landing Page v2.3
//Copyright 2014 8Guild.com
//All scripts for Ultima Landing Page version #2

/*Page Preloading*/
$(window).load(function() {
	$('#spinner').fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	setTimeout(function(){$('.first-slide div:first-child').addClass('fadeInDown');},100);
	setTimeout(function(){$('.first-slide div:last-child').addClass('fadeInRight');},100);
	setTimeout(function(){$('.color-switcher').addClass('slideInLeft');},100);
});

/*Checking if it's touch device we disable some functionality due to inconsistency*/
if (Modernizr.touch) { 
	$('*').removeClass('animated');
}

/*Document Ready*/
$(document).ready(function(e) {
	
	
	/********Responsive Navigation**********/
	$('.navi-toggle').on('click',function(){
		$('.main-navi').toggleClass('open');
	});
	
	$('.main-navi .has-dropdown a i').click(function(){
		$(this).parent().parent().find('.dropdown').toggleClass('expanded');
		return false
	});
	
	/*Hero Slider*/
	$('.hero-slider').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		controls: false,
		video: true,
		touchEnabled: false
	});
	
	////////////////////////////////////////////////////////////
	//INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top-80}, 1000, 'easeInOutQuart');
	});
	
	/*Scroll Up*/
	$('.scroll-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutQuart');
    return false;
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('#scroll-top').addClass('visible');
		} else {
			$('#scroll-top').removeClass('visible');
		}
	});
	
	//SCROLL-SPY
	// Cache selectors
	var lastId,
		topMenu = $(".main-navi"),
		topMenuHeight = topMenu.outerHeight(),
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight+200;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }
	});
	////////////////////////////////////////////////////////////////////
	
	
	//Enable Touch / swipe events for carousel 
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('prev'); 
		},
		swipeLeft: function() {
			$(this).parent().carousel('next'); 
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold:0
	});
	
	/*Adding Placeholder Support in Older Browsers*/
	$('input, textarea').placeholder();
	
	/*Gallery Plugin Initializing*/
	Grid.init();
	/*Custom Style Checkboxes and Radios*/
	$('input').iCheck({
    checkboxClass: 'icheckbox',
    radioClass: 'iradio'
  });	
	
	/*Adding Placeholder Support in Older Browsers*/
	$('input, textarea').placeholder();
	
	/*Tooltips*/
	$('.tooltipped').tooltip();
	
	/*Login Form Validation*/
	$('.login-form').validate();
	
	/*Subscriptions Form Validation*/
	$('.subscribe-form').validate();



});/*/Document ready*/


