'use strict';
(function () {
    $(document).on('ready', function () {
        $('.wrapper-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
        var elem = document.getElementsByClassName("myBar");
        for(var i = 0; i < elem.length; i++) {
            move(elem[i]);
        }
        function move(el) {
            var width = 61;
            el.style.width = width + '%';
        };
    })
})();
