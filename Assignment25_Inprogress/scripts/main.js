$(document).ready(function () {
    $('.toggle-nav').on('click', function () {
        var items = $(this).closest('.nav-bar').find('.nav-items');
        items.slideToggle();


    });

    $('.sub-menu-btn').on('click', function () {
        var subMenu = $(this).closest('.drop-down').find('.sub-menu');
        subMenu.slideToggle();
    });



});