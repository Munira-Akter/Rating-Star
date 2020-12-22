$(document).ready(function() {
    let ratedIndex = -1;
    startcolor();

    if (localStorage.getItem('ratedIndex') != null) {
        let getitem = parseInt(localStorage.getItem('ratedIndex'));
        for (let i = 0; i <= getitem; i++) {
            $('.fa-star:eq(' + i + ')').css('color', 'green')
        }

    }

    $('.fa-star').on('click', function() {
        ratedIndex = parseInt($(this).attr('data-index'));
        localStorage.setItem('ratedIndex', ratedIndex);
        savedatabase();
    })

    //  the mouse over to star for rating
    $('.fa-star').mouseover(function() {
        startcolor();
        // get the attr value of data index
        let currentIndex = parseInt($(this).attr('data-index'));
        // color the hover star
        for (let i = 0; i <= currentIndex; i++) {
            $('.fa-star:eq(' + i + ')').css('color', 'green')
        }

    });

    // after leave the mouse from star

    $('.fa-star').mouseleave(function() {
        startcolor();
        if (ratedIndex != -1) {
            for (let i = 0; i <= ratedIndex; i++) {
                $('.fa-star:eq(' + i + ')').css('color', 'green')
            }
        }

    });

    // ajax request to index page for database add and update

    function savedatabase() {
        $.ajax({
            url: "index.php",
            method: 'POST',
            dataType: 'json',
            data: { save: 1, ratedIndex: ratedIndex },
            success: function(output) {

            }
        })
    }

    // color the start as default

    function startcolor() {
        $('.fa-star').css('color', '#f1cfa1');
    }

});