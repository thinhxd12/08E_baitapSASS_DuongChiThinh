
$(document).ready(function () {
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 300) {
            $('.header').addClass('custom-header');
            $('.header').removeClass('top-header');
        }
        else {
            $('.header').addClass('top-header');
            $('.header').removeClass('custom-header');
        }
    });
});
