 var arr = [];


function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    var fullname = firstName + ' ' + lastName;

    document.getElementById('p1_fullName').innerHTML = fullname;

    var isFilledOut;
    if (firstName.length > 0 && lastName.length > 0){
        isFilledOut = true;
    }else{
        isFilledOut = false;
    }
    document.getElementById('p1_valid').innerHTML = isFilledOut;

    document.getElementById('p1_fullNameLength').innerHTML = fullname.length;


    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;

    var isValidEmail;
    if (emailAddress.indexOf('@') > -1){
        isValidEmail = true;
    }else{
        isValidEmail = false;
    }
    document.getElementById('p2_valid').innerHTML = isValidEmail;
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;




    // Part 3
    var randomNumber = getValue('randomNumber');
    document.getElementById('p3_number').innerHTML = randomNumber;

    var parsedNum = parseInt(randomNumber);
    var isValidNumber;
    if(parsedNum > 0){
        isValidNumber = true;
    }else{
        isValidNumber = false;
    }
    document.getElementById('p3_valid').innerHTML = isValidNumber;
    console.log(randomNumber);


    // Part 4
    var arrayInput = getValue('arrayValue');
    
    arr.push(arrayInput);

    document.getElementById('p4_arraylength').innerHTML = arr.length;
    document.getElementById('p4_valid').innerHTML = arr;



   







    ////////////////////////Youre code ends here.

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