
 /* ==============================================
Page Loader
=============================================== */

$(window).load(function() {
	'use strict';
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
});


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */	

$('.nav-toggle').hover(function() {
	'use strict';
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
 });

/* ==============================================
Mobile Menu Button
=============================================== */	

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
	
});



 /* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
		'use strict';

		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});



 /* ==============================================
Active Navigation Calling
=============================================== */

$('body').scrollspy({ 
	target: '.nav-menu',
	offset: 95
})

 /* ==============================================
Tooltips Calling
=============================================== */	

$('[data-toggle="tooltip"]').tooltip();

/* ==============================================
Navigation Scroll Effect
=============================================== */


$(document).ready(function () {
	'use strict';

    var menu = $('#navigation');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.waypoint').offset().top - 200;

        if (y >= z) {
            menu.removeClass('not-visible-nav').addClass('visible-nav');
        }
        else{
            menu.removeClass('visible-nav').addClass('not-visible-nav');
        }
    });

});

