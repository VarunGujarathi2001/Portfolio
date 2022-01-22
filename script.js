$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $('.navbar').css("background", "rgb(248, 4, 53)");
        } else {
            $('.navbar').css("background", " none");
        }
    })
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active")
    });
});