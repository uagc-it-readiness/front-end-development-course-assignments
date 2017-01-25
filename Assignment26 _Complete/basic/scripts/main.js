$(document).ready(function () {
    $('#btnShowModal').on('click', openModal);


    function openModal() {
        $('.overlay').fadeIn(100, function () {
            $('.modal').fadeIn(100);

            $('#btnClose, .overlay').on('click', closeModal);
             registerEsc();

        });
    }

    function closeModal() {
        console.log('close');
        $('.modal').fadeOut(100, function () {
            $('.overlay').fadeOut(100);

            $(document).off('keyup');
            $('#btnClose, .overlay').off('click', closeModal);
        });

    }

    function registerEsc() {
        $(document).on('keyup', function (e) {
            console.log(e.keyCode);
            if (e.keyCode === 27) {
                closeModal();
            }
        });
    }

    /*
    function activateKey(e){
        }
    */



});