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

    navTab_highlight();
    navTab_checkAnchorLinks('header-block');
    navTab_setBg('header-block');
    navTab_changebgopacitymenu('header-block');
    navTab_createMobileMenu('header-block');

    setTimeout(function() {
        t_menusub_init('header-block');
    }, 500);

    $('#record-header-block .navtab__list .navtab__list_item').each(function(e) {
        if ($(this).find('.t-menu__link-item').hasClass('t-active')) {
            $(this).css('background', '#EBF2F3');
        }
    })
});

if (!document.getElementById('t-phonemask-script')) {
    (function(d, w, o) {
        var n = d.getElementsByTagName(o)[0],
            s = d.createElement(o),
            f = function() {
                n.parentNode.insertBefore(s, n);
            };
        s.type = "text/javascript";
        s.async = true;
        s.id = 't-phonemask-script';
        s.src = "images/js__tilda-phone-mask-1.1.min.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, 'script');
} else {
    $(document).ready(function() {
        if (typeof t_form_phonemask_load == 'function') {
            t_form_phonemask_load($('#record-contact-us-block [data-phonemask-lid=1495810359387]'));
        }
    });
}

$(document).ready(function() {
    setTimeout(function() {
        contactUs_initPopup('contact-us-block');
    }, 500); /* hack for Android */
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    if (isAndroid) {
        $('.t-body').addClass('t-body_scrollable-hack-for-android');
        $('head').append("<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-hack-for-android {\noverflow: visible !important;\n}\n}\n</style>");
        console.log('Android css hack was inited');
    }
});

// Tilda copyright. Don't remove this line
// Stat 
// if (!window.mainTracker) {
//     window.mainTracker = 'tilda';
// }(function(d, w, k, o, g) {
//     var n = d.getElementsByTagName(o)[0],
//         s = d.createElement(o),
//         f = function() {
//             n.parentNode.insertBefore(s, n);
//         };
//     s.type = "text/javascript";
//     s.async = true;
//     s.key = k;
//     s.id = "tildastatscript";
//     s.src = g;
//     if (w.opera == "[object Opera]") {
//         d.addEventListener("DOMContentLoaded", f, false);
//     } else {
//         f();
//     }
// })(document, window, '5b36f20db4f99e50afade13d06cc875d', 'script', 'https://stat.tildacdn.com/js/tildastat-0.2.min.js');