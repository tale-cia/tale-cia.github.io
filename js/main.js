window.dataLayer = window.dataLayer || [];

if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent)) === false && typeof(sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y') {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
    document.getElementsByTagName('head')[0].appendChild(style);
    $(document).ready(function() {
        $('.t-records').addClass('t-records_animated');
        setTimeout(function() {
            $('.t-records').addClass('t-records_visible');
            sessionStorage.setItem('visited', 'y');
        }, 400);
    });
}

$(document).ready(function() {
    setTimeout(function() { // make animate scroll to content
        var $root = $('html, body');
        $('a[href*="#"]:not([href="#"],.carousel-control,.t-carousel__control,[href^="#price"],[href^="#popup"],[href^="#prodpopup"],[href^="#order"])').click(function() {
            var target = $(this.hash);
            if (target.length == 0) {
                target = $('a[name="' + this.hash.substr(1) + '"]');
                if (target.length == 0) {
                    return true;
                }
            }
            $root.animate({
                scrollTop: target.offset().top + 3
            }, 500);
            return false;
        });
    }, 500);
});