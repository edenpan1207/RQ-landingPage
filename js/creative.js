(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $('a.brand-title').click(function(e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: 0 }, 1250, 'easeInOutExpo');
    });


    $('a.page-scroll').bind('click', function(event) {
        var connect = $(this).attr('href');
        var position = $(connect).offset().top;
        $('body').stop().animate({
            scrollTop: position - 50
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-coach', { 
        duration: 600 
    }, 50);

    // Initialize and Configure Magnific Popup Lightbox Plugin
   /* $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });*/

    $('.list-group-item > ul').hide();
    $('.list-group-item > h4').click(function() {
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    })

})(jQuery); // End of use strict
