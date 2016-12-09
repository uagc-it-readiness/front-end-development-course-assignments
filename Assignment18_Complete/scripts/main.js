$(document).ready(function () {
    $('input, textarea').on('blur', function () {
        var input = $(this);
        validateRequiredInput(input)

        if (input.data('isemail') === true) {
            validateEmail(input);
        }

        if (input.attr('type') === 'password') {
            validatePassword();
        }
    });

    $('#btnSubmit').on('click', function () {
        validateAllInputs();
    });

    $('#btnReset').on('click', function () {
        var allInputs = $('input, textarea')
        allInputs.val('');
        allInputs.removeClass('invalid');
        $('.error').hide();
        $('#messages').html('');
    });


});

/**
 * Validates a single input.
 * Accepts a jQuery object for it's input
 * @param {any} input
 */
function validateRequiredInput(input) {
    var val = input.val();

    //Find the required input span.
    var msgSpan = input.closest('.input-group').find('.requiredMsg');
    if (val === '') {
        msgSpan.fadeIn();
        input.addClass('invalid');
    } else {
        msgSpan.fadeOut();
        input.removeClass('invalid');
    }
}

/**
 * Validates an email input
 * Accepts a jQuery object as its input parameter
 * @param {any} email
 */
function validateEmail(email) {
    var emailValue = email.val();

    var emailErrorMsg = email.closest('.input-group').find('.emailMsg');

    //Only validate if it is filled out
    if (emailValue !== '') {
        if (emailValue.indexOf('@') > -1 && emailValue.indexOf('.com') > -1) {
            emailErrorMsg.fadeOut();
            email.removeClass('invalid');
        } else {
            emailErrorMsg.fadeIn();
            email.addClass('invalid');
        }
    }

}

/**
 * Compares the inputs  and makes sure they match.
 */
function validatePassword() {
    var password = $('#password');
    var passwordValue = password.val();
    var passwordConfirm = $('#passwordConfirm');
    var passwordConfirmValue = passwordConfirm.val();

    //Only validate if both are filled out
    if (passwordValue !== '' && passwordConfirmValue !== '') {

        var passwordErrorMsg = password.closest('.input-group').find('.matchingMsg');

        if (passwordValue !== passwordConfirmValue) {
            passwordErrorMsg.show();
            password.addClass('invalid');
            passwordConfirm.addClass('invalid');
        } else {

            passwordErrorMsg.hide();
            password.removeClass('invalid');
            passwordConfirm.removeClass('invalid');

        }

    }
}



function validateAllInputs() {
    //Select all inputs and text areas
    var allInputs = $('input, textarea');

    //Loop through each and validate individually    
    for (var i = 0; i < allInputs.length; i++) {
        var currentInput = allInputs.eq(i);

        validateRequiredInput(currentInput);

        if (currentInput.data('isemail') === true) {
            validateEmail(currentInput);
        }
        if (currentInput.attr('type') === 'password') {
            validatePassword();
        }
    }

        var invalidInputCount = $('.invalid').length;

    if (invalidInputCount > 0) {
        $('#messages').html('Form is Invalid');
    } else {
        $('.form-elements').fadeOut('slow', function () {
            $('#successmsg').fadeIn();
        });
    }

}