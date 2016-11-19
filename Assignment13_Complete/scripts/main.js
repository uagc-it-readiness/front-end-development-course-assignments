var btn = getE('btnSubmit');
btn.addEventListener('click', submit);

var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

var inputs = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordConfirm', 'about'];
var ERROR_CLASS = 'invalid';

function submit() {
    var elm;
    var errorList = [];

    //loop through the array of inputs from line 7
    for (var i = 0; i < inputs.length; i++) {
        //Get the element from the corresponding item in the array.
        elm = getE(inputs[i]);


        if (elm.value === '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }

    }

    var passWord = getE('password').value;
    var passWordConfirm = getE('passwordConfirm').value;
    if (passWord !== passWordConfirm) {
        errorList.push('Passwords do not match');
    }

    var email = getE('emailAddress');
    if (email.value.indexOf('@') == -1) {
        errorList.push('Enter a valid Email');
    }

    var tim = getE('timezone');
    if (tim.value === '') {
        tim.classList.add(ERROR_CLASS);
        errorList.push('Timezone is required');
    } else {
        tim.classList.remove(ERROR_CLASS);
    }

    var terms = getE('terms');
    if (terms.checked === false) {
        errorList.push('You must accept the terms and conditions');
    }




    var html = '';
    if (errorList.length > 0) {
        //Loop through and add each message to our html variable
        html = '<ul class="errors">';
        for (var i = 0; i < errorList.length; i++) {
            //html += errorMsg[i] + '<br />';            
            html = html + '<li>' +  errorList[i] + '</li>';
        }
        html += "</ul>";
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset();
    }

    getE('messages').innerHTML = html;
}

function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getE(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getE('messages').innerHTML = '';

    getE('timezone').value = '';
    getE('terms').checked = false;
}

function getE(id) {
    return document.getElementById(id);
}