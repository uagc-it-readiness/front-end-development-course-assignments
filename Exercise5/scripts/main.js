$(document).ready(function(){
    var section = $('section');

    section.find('header').on('click', function(){
        $(this).closest('section').find('article').slideToggle();
    });
    section.find('article a[href="#"]').on('click', function(e){
        e.preventDefault();

        $(this).closest('article').slideUp();
    });


});