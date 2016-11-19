var btn = getElm('btnSubmit');
btn.addEventListener('click', update);

var errClass = "invalid";

function update() {
    //creates empty array for our array messages
    var errorMsg = [];

    //get the firstName element
    var firstName = getElm('firstName');
    //Check to see if first name is empty
    if (firstName.value === '') {

        //Add our error message to the array
        errorMsg.push('First Name is required');

        //Add an error class to our input
        firstName.classList.add(errClass);
    }

    var lastName = getElm('lastName');
    if (lastName.value === '') {
        errorMsg.push('Last Name is required');
        lastName.classList.add(errClass);
    }

    var email = getElm('emailAddress');
    if (email.value === '') {

        errorMsg.push('Email is required');
        email.classList.add(errClass);

        //Check to see if our input contains @ or .com
    } else if (email.value.indexOf('@') == -1 ||
        email.value.indexOf('.com') == -1) {
        errorMsg.push('A Valid Email is required');
        email.classList.add(errClass);
    }


    var password = getElm('password');
    if (password.value === '') {
        errorMsg.push('Password is required');
        password.classList.add(errClass);
    }

    var passwordConfirm = getElm('passwordConfirm');
    if (passwordConfirm.value === '') {
        errorMsg.push('Confirm is required');
        passwordConfirm.classList.add(errClass);
    }


    //Verify both fields are filled out and make sure that the passwords match.
    if (password.value !== '' &&
        passwordConfirm.value !== '' &&
        password.value !== passwordConfirm.value) {

        errorMsg.push('Passwords must match');

        password.classList.add(errClass);
        passwordConfirm.classList.add(errClass);
    }

    /*  
    Alternative way
    if (password.value !== '') {
        if (passwordConfirm.value !== '') {
            if (password.value !== passwordConfirm.value) {
                errorMsg.push('Passwords must match');
            }
        }
    }
    */

    if (errorMsg.length > 0){
        var html = '';

        for(var i = 0; i < errorMsg.length; i++){
            //html += errorMsg[i] + '<br />';            
            html = html + errorMsg[i] + '<br />';            
        }
        getElm('message').innerHTML = html;
    }else{

        getElm('message').innerHTML = "Thank you for submitting your information";
    }





    console.log(errorMsg);
}

var resetBtn = getElm('btnReset');
resetBtn.addEventListener('click', reset);

function reset() {
    var inputIdArray = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordConfirm'];

    for(var i = 0; i < inputIdArray.length; i++){
        getElm(inputIdArray[i]).value ='';
    }

}






/////////////////
function getElm(id) {
    return document.getElementById(id);
}