// Header Middle Stikey Start

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $('.axil-mainmenu').addClass("active")
    } else {
        $('.axil-mainmenu').removeClass("active")
    };
});


//---services start---
$('.services-slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>'
});

// viddeo modal start
$(".about-us-video").modalVideo();
// viddeo modal end

//---services end---

// Featured Case Study Counter Start
$(document).ready(function () {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }
    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }
    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }

});

// Featured Case Study Counter End

// dark mood Start

$(document).ready(function () {
    const darkModeToggle = $('#darkModeToggle');
    const body = $('body');

    darkModeToggle.on('click', function () {
        body.toggleClass('dark-mode');
        const isDarkMode = body.hasClass('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateIcon();
    });

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        body.addClass('dark-mode');
    }

    function updateIcon() {
        const icon = darkModeToggle.find('i');
        if (body.hasClass('dark-mode')) {
            icon.removeClass('fa-sun').addClass('fa-moon');
        } else {
            icon.removeClass('fa-moon').addClass('fa-sun');
        }
    }
    updateIcon();
});

// dark mood End


// <!------Testimonial Start----->

// $('.testinmonial-slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });

// $('.testinmonial-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     arrows: true,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 991,
//             settings: {
//                 arrows: true,
//                 centerPadding: '40px',
//                 slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 767,
//             settings: {
//                 arrows: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });

$('.testinmonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


// <!------Testimonial End----->
