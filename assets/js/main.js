// Header Middle Stikey Start

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $('.axil-mainmenu').addClass("active")
    } else {
        $('.axil-mainmenu').removeClass("active")
    };
});
