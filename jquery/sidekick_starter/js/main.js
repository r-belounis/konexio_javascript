jQuery(document).ready(function($) {

    // 1) Animation text
    // -----------------
    var textAnimation = $('#animation-text').animate({left: "500"});
    var textAnimation2 = $('#animation-text2').animate({left: "500"}, 1000);

    // Waypoints + animation on scroll
    // var textAnimationOnScroll = $('#animation-scroll').waypoints({
    //     handler: function(direction) {
    //         if (direction == "up") {
    //             textAnimation.reset();
    //             textAnimation2.reset();
    //           } else {
    //             textAnimation.start();
    //             textAnimation2.start();
    //           }
    //         },
        // offset: '50%'
    // });


    // 2) Pricing
    // ----------
    // CounterUp on pricing classes
    var counterUp = $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Waypoints + counterUp on scroll
    // var countOnScroll = $('#pricing').waypoint({
    //     handler: function(direction) {
    //       if (direction == "up") {
    //         counterUp.reset();
    //       } else {
    //         counterUp.start();
    //       }
    //     },
        // offset: '50%'
    // });

// jQuery End
});