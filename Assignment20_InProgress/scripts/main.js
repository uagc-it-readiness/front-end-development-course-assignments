$(document).ready(function(){

    //todo: execute a fake get request


    //Wire up our event listeners
    //I'm going to use function names so I can reuse them later
    $('#name').on('blur', validateName);
    $('#answer').on('blur', validateAnswer);


    
    //Register button click events
    $('#btnReset').on('click', resetForm);
    $('#btnSubmit').on('click', submitForm);





    //checks to see if an name is filled out and 
    //shows an error message if it is not
     function validateName(){
        var nameElm = $('#name');
    }

    
    //checks to see if an answer is filled out and 
    //shows an error message if it is not
    function validateAnswer(){
        var answerElm = $('#answer');

    }


    //Clears our inputs and hides all error messages
    function resetForm(){
    }

    //submit form
    function submitForm(){
        //TODO: is the form valid?

        //Update UI with new post


        //Display thank you message
        
        //Execute ajax post
    }



});