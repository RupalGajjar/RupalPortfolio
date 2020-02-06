

$(document).ready(function () {
            $('.menu-toggler').on('click', function () {
                $(this).toggleClass('open');
                $('.top-nav').toggleClass('open');
            });

            //toggle menu visibility
$("#js-navbar-toggle").on("click", function () {
    $("#js-menu").toggleClass('active');
   });

     // smooth scrolls to sections
  $('nav a[href*="#"]').not("#blog").on("click", function () {
    $("#js-menu").toggleClass('active');
 $("html, body").animate({
scrollTop: $($(this).attr("href")).offset().top
 }, 500);
  });
            $('.top-nav .nav-link').on('click', function () {
                $('.menu-toggler').removeClass('open');
                $('.top-nav').removeClass('open');
            });

            $('nav a[href*="#"]').on('click', function () {
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 100
                });
            });

            $('#up').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 2000);
            });
        });
    
/*
newFunction();

function newFunction() {
        const newLocal = 2000;
        $(document).ready(function () {
            $('.menu-toggler').on('click', function () {
                $(this).toggleClass('open');
                $('.top-nav').toggleClass('open');
            });
            $('.top-nav .nav-link').on('click', function () {
                $('.menu-toggler').removeClass('open');
                $('.top-nav').removeClass('open');
            });
            $('nav a[href*="#"]').on('click', function () {
                $('html, body').animate(keyframes, {
                    scrollTop: $($(this).attr('href')).offset().top - 100
                }, options, newLocal);
            });
        });
    }

*/

