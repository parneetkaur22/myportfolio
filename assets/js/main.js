(function($) {

	"use strict";

    // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(350).fadeOut('slow'); 
    })

    // wow animation script
    // new WOW().init();

    // Navbar animation on scroll
    $(window).scroll(function() {
      if ($(document).scrollTop() > 5) {
        $('.navbar').addClass('scrolling-header');
      } else {
        $('.navbar').removeClass('scrolling-header');
      }
    });

    // owl-carousel for main-slider 
    $('.main-slider').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin: 0,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        autoplaySpeed:1200,
        navText: [
                '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
        responsive: {
            0: {
                items:1
            },
            600:{
                items:1
            },
            1000: {
                items:1
            }
        }
    });


    // Testimonial carousel
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav:false,
            animateIn: 'fadeInLeft',
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fa fa-angle-down" aria-hidden="true"></i>',
              '<i class="fa fa-angle-up" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }


    // Team Carousel
    if($('.blog-carousel').length){
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
              '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                601: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1199: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    // Brand carousel
    if($('.brand-carousel').length){
        $('.brand-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav:false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 2,
                },
                480:{
                    items:2,
                },
                600: {
                    items: 3,
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    }


    // Light box - Portfolio Gallery
    lightbox.option({
      'imageFadeDuration': 500,
      'resizeDuration': 500,
      'wrapAround': true
    })

    
    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      }); 

    // Filtering
    if($('.filtr-container').length){
        $('.filtr-container').imagesLoaded(function() {
            var filterizr = $('.filtr-container').filterizr();
        });
    }

    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });


    // YTPlayer for bg video
    $('.bg-video').mb_YTPlayer();

    // Video popup jquery
    jQuery("a.demo").YouTubePopUp();

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });

    // circleMagic Animation
    $('.header').circleMagic({
        elem: '.header',
        radius: 35,
        densety: .3,
        color: 'rgba(255,255,255, .4)',
        // color: 'random',
        clearOffset: .3
    });



})(window.jQuery);