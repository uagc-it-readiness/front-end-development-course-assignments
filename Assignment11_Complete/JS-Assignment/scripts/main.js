function update() {
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var emailAddress = getValue('emailAddress');

    var messages = [];

    if (firstName === '') {
        messages.push('First Name is required');
    }

    if (lastName === '') {
        messages.push('Last Name is required');
    }

    if (emailAddress === '') {
        messages.push('Email Address is required');
    }

    var errElm = getElm('error-list');


    var html = '';
    for (var i = 0; i < messages.length; i++) {
        html += messages[i] + '<br />';
    }

    errElm.innerHTML = html;


    var user = {
        first: firstName,
        last: lastName,
        email: emailAddress
    };

    user.fullname = function () {
        return this.first + ' ' + this.last;
    };

    console.log(user);

    if (messages.length === 0) {
        alert('Submitted');
    }


}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}