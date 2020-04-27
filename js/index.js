$(function () {

    let urlBase = 'https://esther-birthday.herokuapp.com'
    //let urlBase = 'http://localhost:8080'


    $.ajax({
        method: 'GET',
        url: urlBase + '/startStep'
      })
        .done(function(data) {
            main(data);
        });

    function main(result) {

        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true
        });

        updateCheckSecret(result);
       
        updateClickButton(result);

    }

    function updateCheckSecret(result) {
        let secretKey = "";
        $("#password").on('input', function (e) {
            e.preventDefault();
            secretKey = $(this).val();

            if (secretKey === result.currentSecretKey) {

                $.ajax({
                    method: 'GET',
                    url: urlBase + '/getSecrets'
                })
                    .done(function(secretData) {
                        
                        $(".secret-image").attr("src", secretData.secretImagePath);
                        $(".secret-description").text(secretData.secretDescription);
                        
                        if (result.currentStep < 6) {
                            $(".secret-button").text(secretData.secretButton);
                        } else {
                            $(".secret-button").hide();
                        }   

                        if (secretData.secretExtra) {
                            $('.secret-extra').append(secretData.secretExtra);
                        }

                        $('.secret-div').show({
                            duration: 1000
                        });
                    });
               
            } else {
                $('.secret-div').hide({
                    duration: 1000
                });
            }
        });
    }

    function updateClickButton(result) {
        $('.secret-button').click(function(e) {
            e.preventDefault();
            alert('Sua chave secreta foi alterada agora!!');

            $.ajax({
                method: 'GET',
                url: urlBase + '/nextChallenge'
            })
                .done(function() {
                    location.reload();
                });

        });
    }


});
