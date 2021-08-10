$(function() {
	
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();
	
	
	
	
	/* fixed header */
	
	checkScroll(scrollOffset);
	
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		
		checkScroll(scrollOffset);
	});
	
	
	function checkScroll(scrollOffset) {
		
		if( scrollOffset >= introH ) {
			header.addClass("header-fixed");
			
		} else {
			header.removeClass("header-fixed");
		}
	}
	
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		
		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		
		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
		
		
		
	})
	
	
	
	/* mobile nav toggle */
	
	$("#nav-toggle").on("click", function(Event) {
		Event.preventDefault();
		
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})
	
	$("#home").on("click", function(Event) {
		Event.preventDefault();
		
		$("#nav").toggleClass("active");
		$("#nav-toggle").toggleClass("active");
	})
	
	
	/* slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});