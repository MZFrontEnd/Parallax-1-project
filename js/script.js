$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.sectionHeader__logo').css({
        'transform': 'translate(0px,' + wScroll / 1.6 + '%)'

    });
    if (wScroll > screen.height * .3) {
        $('.sectionHeader__offerBtn').addClass(".sectionHeader__offerBtn--solid")
    } else {
        $('.sectionHeader__offerBtn').removeClass(".sectionHeader__offerBtn--solid")
        // $('.sectionHeader__offerBtn').hover(function () {
        //     $(this).css("background-color", "rgb(175, 28, 2)");
        // });
    };
});