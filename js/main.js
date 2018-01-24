$( document ).ready(function() {
	var elemWidth;
	var $element = $('#detail-carousel .carousel-indicators li');

	function calculateWidth(){
		elemWidth = $element.innerWidth();
	}

	$(window).resize(function(){
		calculateWidth();
	});

	calculateWidth();

	$('.indicator-control.left').click(function(){
		var left = $('#detail-carousel .carousel-indicators').css('left');
		var carouselIndicatorsLeft = parseInt(left.split("px")[0], 10);
		var safeZone = elemWidth * ($element.length - 3);

		if( Math.abs(carouselIndicatorsLeft) < safeZone) {
			$('#detail-carousel .carousel-indicators').stop().animate({left: (carouselIndicatorsLeft + elemWidth) + 'px'}, 500);
		} else {
			$('#detail-carousel .carousel-indicators').stop().animate({left: '0px'}, 500);
		}
	})

	$('.indicator-control.right').click(function(){
		var left = $('#detail-carousel .carousel-indicators').css('left');
		var carouselIndicatorsLeft = parseInt(left.split("px")[0], 10);
		var safeZone = elemWidth * ($element.length - 1);

		if( Math.abs(carouselIndicatorsLeft) < safeZone) {
			$('#detail-carousel .carousel-indicators').stop().animate({left: (carouselIndicatorsLeft - elemWidth) + 'px'}, 500);
		} else {
			$('#detail-carousel .carousel-indicators').stop().animate({left: '0px'}, 500);
		}
	})

	$(".dropdown img.flag").addClass("flagvisibility");
	$(".dropdown dt a").click(function() {
		$(".dropdown dd ul").toggle();
	});

	$(".dropdown dd ul li a").click(function() {
		var text = $(this).html();
		$(".dropdown dt a span").html(text);
		$(".dropdown dd ul").hide();
		$("#result").html("Selected value is: " + getSelectedValue("sample"));
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a span.value").html();
	}

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown"))
			$(".dropdown dd ul").hide();
	});

	$(".dropdown img.flag").toggleClass("flagvisibility");


	$(window).scroll(function(){
		if( $(window).scrollTop() > 170 ) {
			$('header').addClass('sticky');
			$('header ul.sticky-menu').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
			$('header ul.sticky-menu').removeClass('sticky');
		}
	});

	$('section.sales .section-title').click(function(){
		$(this).toggleClass('open');
	});

	
	$('.btn-group.categories').click(function(){
		$(this).toggleClass('open');
	});

});