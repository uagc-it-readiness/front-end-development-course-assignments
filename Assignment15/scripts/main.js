$(document).ready(function(){

     ///// Code goes here
     $('#btnOne').on('click', function(){
         alert('hello');
     });


    $('#btnOne').on('click', sayhello);
    
    function sayhello(){
        alert('hello');
    }



});