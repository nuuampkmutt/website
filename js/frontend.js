 /**
 * frontend.js
 * ==============================
 * Customized for customer installation
 * Note: Always lint with http://www.jshint.com/
*/

var app = (function($) {

    function frontpageCarousel() {
        $('#frontpage-carousel').slick({
            arrows: true,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 3,
            slide: '.slide',
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }],
        });
    }

    var init = function () {

        // Global ajax setup
        $.ajaxSetup({
            data : { 'debug' : 'off', 'ajax' : 1 } // Always add debug parameter with ajax call except string format
        });

        // Open new window
        $("a[rel=external]").attr( 'target', '_blank' );

		frontpageCarousel();

    },

    pageLoad = function () {
        // Do something after page load
    },


	getScript = function (key) {
		return appConfig.script[key] || key || '';
	};

    return {
        init: init,
        pageLoad: pageLoad,
        getScript: getScript
    };


})(jQuery);

$(document).ready(app.init); // Executes when HTML-Document is loaded and DOM is ready
$(window).load(app.pageLoad); // Executes when complete page is fully loaded, including all frames, objects and images
