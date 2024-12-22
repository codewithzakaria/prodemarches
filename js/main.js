(function ($) {
    "use strict";

    // Spinner 
    var spinner = function () {
        setTimeout(function(){
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // WOW.js Initialization
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) { // Corrected to scrollTop
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
        }
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({ // Fixed missing closing bracket
        delay: 10,
        time: 2000
    });

    // Portfolio Isotopes & Filter
    var portfolioIsotopes = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('#portfolio-filters li').on('click', function() {
        $('#portfolio-filters li').removeClass('active');
        $(this).addClass('active');
        portfolioIsotopes.isotope({ filter: $(this).data('filter') });
    });

    // Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) { // Corrected to scrollTop
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
