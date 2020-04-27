$(function () {

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

    let v = "";
    $("#password").on('input', function () {
        v = $(this).val();

        if (v === '123') {
            $(".secret-div").show('slow');
        } else {
            $(".secret-div").hide('slow');
        }

        console.log("value = " + v);
    });

    // $.ajax({
    //     method: "GET",
    //     url: "https://esther-birthday.herokuapp.com/test"
    //   })
    //     .done(function() {
    //         alert('deu certo');
    //     });


});
