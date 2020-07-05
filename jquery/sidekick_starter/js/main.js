// Waypoint + CounterUp
jQuery(document).ready(function($) {

    // CounterUp on pricing classes
    var counterUp = $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

// jQuery End
});

// WOW animations
new WOW().init();

// Smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
	speedAsDuration: true
});