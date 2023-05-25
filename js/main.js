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


// Add JavaScript for the 3D animation using a library of your choice
// Make sure to include the necessary scripts and initialize the animation
// Example using Three.js library

// Initialize the canvas and scene
var canvas = document.getElementById('animation-canvas');
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
var scene = new THREE.Scene();

// Add your 3D objects, lights, and other animations here
// Example: Create a rotating cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  // Add animation logic here, e.g., rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
