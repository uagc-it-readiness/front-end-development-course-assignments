$(document).ready(function () {

    $('.mobile-collapse-toggle').on('click', function () {
        var btn = $(this);

        var nav = btn.closest('nav');
        nav.find('.mobile-collapse').slideToggle();
    });

    $('.drop-down-toggle').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);

        var nav = btn.closest('.drop-down');
        nav.find('.drop-down-content').slideToggle();
    });

});