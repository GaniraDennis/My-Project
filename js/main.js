const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
 $('.menu-cont').on('click', function() {
   
   var menu = $('.menu-txt').text();
     var close = $('.menu-txt').attr('data-text');
   
   $('.menu').toggleClass('active');
   
   if ($('.menu-txt').text(menu)) {
       $('.menu-txt').text(close);
   } else {
     $('.menu-txt').text(menu);
   } 
       $('.menu-txt').attr('data-text',menu);
 })
 var findNCenter = function() {
   var elems = document.querySelectorAll('.center-vertical');
 
   for(var i =0; i<elems.length; i++) {
     elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
   }
 };
 
 document.addEventListener && document.addEventListener('DOMContentLoaded', findNCenter);
 window.addEventListener && window.addEventListener('resize', findNCenter);
 
 $(document).ready(function() {
 
   var count = $('#inner p').length;
   var i = 1;
     
 setInterval(function() {
   if (i < count) {
     $('#inner').css('-webkit-transform','translate3d(0,-' + i + '00%,0)');
       i++;
   }
 }, 800);
 });

 
 $(document).ready(function() {
    var slides = $('.slide');
    var slideIndex = 0;

    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000);
});
