$(window).load(function () {

    "use strict";

    /* ========================================================== */
    /*   Popup-Gallery                                            */
    /* ========================================================== */
    $('.popup-gallery').find('a.popup1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup3').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup4').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: false
        }
    });


    /* ========================================================== */
    /*   Header Show/Hide                                             */
    /* ========================================================== */

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 700) {
                $('.navbar').slideDown(100);
            } else {
                $('.navbar').slideUp(100);
            }
        });
    });


    /* ========================================================== */
    /*   SmoothScroll                                             */
    /* ========================================================== */

    $(".nav li a, a.scrool").click(function (e) {

        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;

        $('html,body').animate({scrollTop: target_top - 69}, 1000);
        return false;

    });


    /* ========================================================== */
    /*   Newsletter                                               */
    /* ========================================================== */
    $('.newsletter_box .newsletter_form').each(function () {
        var form = $(this);
        //form.validate();
        form.submit(function (e) {
            if (!e.isDefaultPrevented()) {
                jQuery.post(this.action, {
                    'email': $('input[name="nf_email"]').val(),
                }, function (data) {
                    form.fadeOut('fast', function () {
                        $(this).siblings('p.newsletter_success_box').show();
                    });
                });
                e.preventDefault();
            }
        });
    });

    /* ========================================================== */
    /*   Preloader                                                */
    /* ========================================================== */

    $('.spinner').delay(50).fadeOut('slow');
    $('#preloader').delay(400).fadeOut('slow');
    $('body').delay(400).css({'overflow': 'visible'});


});