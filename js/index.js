
$(document).ready(function () {
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 300) {
            $('.header').addClass('custom-header');
            $('.header').removeClass('top-header hide-header');
        }
        else if (position < 300 && position >= 100) {
            $('.header').addClass('hide-header');
        }
        else if (position < 100) {
            $('.header').addClass('top-header');
            $('.header').removeClass('custom-header hide-header');
        }
    });
});
