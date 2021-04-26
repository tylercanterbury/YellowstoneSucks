(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        //======================================
        //Set the carousel options
        $('#myCarousel').carousel({
            pause: true,
            interval: 4000,
        });
        //scrolltop
        $('.scroll-to-top').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        /*------------------------------------
       -- search
       ------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '.body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /**-------------------------------
       * - magnific popup activation 
       * -----------------------------**/
        $('.video-play-btn,.video-popup').magnificPopup({
            type: 'video'
        });
        $('.imagepopup').magnificPopup({
            type: 'image'
        });
        
        /*------------------------------------
       -- back to top
       ------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        /*----------------------------
        our animal
        ------------------------------ */
        var $animalsCarousel = $('.animals-carousel');
        $animalsCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            autoPlayTimeout: 1000,
            margin: 30,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                530: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 6
                },
                1920: {
                    items: 6
                }
            }
        });

     
        /*--------------------------------
	animals Slick Carousel .animals-text-slider .animals-image-slider
-----------------------------------*/
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

         

        /*------------------------------------
            animals Slick Carousel as Nav
        --------------------------------------*/
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '10px',
            responsive: [
                {
                    breakpoint: 450,
                    settings: {
                        dots: false,
                        slidesToShow: 5,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        autoplay: true,
                        dots: false,
                        slidesToShow: 1,
                        centerMode: false,
                    }
                }
            ]
        });

    });


   
    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {


        //back to top show/hide
        var ScrollTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 300) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;

    });

    jQuery(window).load(function () {

        /**---------------------------
         *  filterizr enable
         * ------------------------**/
        var $filterizr = $('.filterizr__elements');
        if ($filterizr.length) {
            var $filterizrControls = $('.filterizr__controls');
            $filterizr.filterizr();
            $filterizrControls.children('li').click(function () {
                $filterizrControls.find('li.active').removeClass('active');
                $(this).addClass('active');
            });
        }


    });


    $(window).on('scroll', function () {

        /*----------------------------------
		    back to top show/hide
		----------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }


    });
    $(window).on('load', function () {

        /**---------------------------
         *  preloader
         * -------------------------**/
        var preLoder = $("#preloader");
        preLoder.addClass('hide');
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);

    });

}(jQuery));




