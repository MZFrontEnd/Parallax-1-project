$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.sectionHeader__logo').css({
        'transform': 'translate(0px,' + wScroll / 1.6 + '%)'

    });
    if (wScroll > screen.height * .3) {
        $('.sectionHeader__btn--offer').css("background-color", "rgb(175, 28, 2)");
    } else {
        $('.sectionHeader__btn--offer').css("background-color", "rgba(175, 28, 2, .5)");
        // $('.sectionHeader__btn--offer').hover(function () {
        //     $(this).css("background-color", "rgb(175, 28, 2)");
        // });
    };
});