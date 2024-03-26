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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>'
});

// viddeo modal start
$(".about-us-video").modalVideo();
// viddeo modal end

//---services end---

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