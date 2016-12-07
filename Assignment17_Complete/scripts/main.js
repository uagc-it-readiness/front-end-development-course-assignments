$(document).ready(function(){

    //Hide Error Messages on page load
    $('.error').hide();

    //Find all input-groups, filter to get all the even elements, and add a class of even to them. 
    $('.input-group').filter(':even').addClass('even');

    //Find all inputs that are inside an input-group
    $('.input-group input').on('blur', function(){

        //Re-initialize the input into a jQuery Object
        var input = $(this);

        //search and find our error message div
        var msg = input.closest('.input-group').find('.requiredMsg');
      
        if(input.val() === ''){
            msg.fadeIn();
        }else{
            msg.fadeOut();
        }
    });

    $('#emailAddress').on('blur', function(){
        //Re-initialize the input into a jQuery Object
        var input = $(this);

        //Store the value of the input
        var inputValue = input.val();

        //search and find our error message div
        var msg = input.closest('.input-group').find('.emailMsg');
        

        if (inputValue.indexOf('@') === -1 || inputValue.indexOf('.com') === -1){
            msg.fadeIn();
        }else{
            msg.fadeOut();
        }

    });
});