// IIFE with jQuery Wrapper
(function ($) {
    'use strict';

    /*
     *----------------------------------
     * Document Ready
     *----------------------------------
     */
    $(document).ready(function () {


        $('#fullpage').fullpage({
            autoScrolling: false,
            fitToSection: false
        });

        $('#pm_menu').pushmenu({button: "#open"});
        $('#option_menu').pushmenu({button: "#sub_option"});


    });// DOM Ready
}(jQuery)); // IIFE
