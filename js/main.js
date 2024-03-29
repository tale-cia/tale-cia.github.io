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

    navTab_checkAnchorLinks('header-block');
    navTab_setBg('header-block');
    navTab_changebgopacitymenu('header-block');
    navTab_createMobileMenu('header-block');

    setTimeout(function() { t_menusub_init('header-block'); }, 500);

    navTab_highlight();
    $('#record-header-block .navtab__list .navtab__list_item').each(function(e) {
        if ($(this).find('.t-menu__link-item').hasClass('t-active')) {
            $(this).css('background', '#EBF2F3');
        }
    })

    setTimeout(function() { contactUs_initPopup('contact-us-block'); }, 500); /* hack for Android */

    var uag = navigator.userAgent.toLowerCase();
    var isAndroid = uag.indexOf("android") > -1;
    if (isAndroid) {
        $('.t-body').addClass('t-body_scrollable-hack-for-android');
        $('head').append("<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-hack-for-android {\noverflow: visible !important;\n}\n}\n</style>");
    }

    if (document.getElementById("record-our-production")) { ourProduction_init('our-production'); }

    if (document.getElementById("record-contact-block")) {
        let contactLink1 = document.getElementById("record-contact-1");
        contactLink1.addEventListener("click", function() {
          document.getElementById("google-frame").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3857123115145!2d30.48955181557548!3d50.39664887946797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8d036c32ff3%3A0x5e58db92c29d208!2sKozatska%20St%2C%20122%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1661091252075!5m2!1sen!2sua";
        });
        let contactLink2 = document.getElementById("record-contact-2");
        contactLink2.addEventListener("click", function() {
          document.getElementById("google-frame").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8916.080286406364!2d30.301895388783652!3d50.261483401638245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b12746abcf75%3A0x703ad5587aae9551!2z0LLRg9C7LiDQkdC-0YLQsNC90ZbRh9C90LAsIDE10LAsINCT0LvQtdCy0LDRhdCwLCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4NjMx!5e0!3m2!1suk!2sua!4v1662104986448!5m2!1suk!2sua";
        });
    }

    if (document.querySelector(".subtab-record")) {
        if (document.getElementById("record-subtab-windows")) {
            subTab_init('subtab-windows');

            t_sldsInit('standart-w');
            t_sldsInit('not-standart-w');
            t_sldsInit('sliding-system-w');
            t_sldsInit('designer-w');

            $('.slider-block').bind('displayChanged', function() {
                t_slds_updateSlider('standart-w');
                t_slds_positionArrows('standart-w');
                t_slds_updateSlider('not-standart-w');
                t_slds_positionArrows('not-standart-w');
                t_slds_updateSlider('sliding-system-w');
                t_slds_positionArrows('sliding-system-w');
                t_slds_updateSlider('designer-w');
                t_slds_positionArrows('designer-w');
            });
        }
        if (document.getElementById("record-subtab-doors")) {
            subTab_init('subtab-doors');

            t_sldsInit('single-leaf');
            t_sldsInit('bivalve-shtulp');
            t_sldsInit('sliding-systems');
            t_sldsInit('hpl-doors');

            $('.slider-block').bind('displayChanged', function() {
                t_slds_updateSlider('single-leaf');
                t_slds_positionArrows('single-leaf');
                t_slds_updateSlider('bivalve-shtulp');
                t_slds_positionArrows('bivalve-shtulp');
                t_slds_updateSlider('sliding-systems');
                t_slds_positionArrows('sliding-systems');
                t_slds_updateSlider('hpl-doors');
                t_slds_positionArrows('hpl-doors');
            });
        }
        if (document.getElementById("record-subtab-equipment")) {
            subTab_init('subtab-equipment');

            t_sldsInit('protective-shutters');
            t_sldsInit('roller-shutters');
            t_sldsInit('jalousie');
            t_sldsInit('mosquito-net');
            t_sldsInit('shpros');
            t_sldsInit('sills');

            $('.slider-block').bind('displayChanged', function() {
                t_slds_updateSlider('protective-shutters');
                t_slds_positionArrows('protective-shutters');
                t_slds_updateSlider('roller-shutters');
                t_slds_positionArrows('roller-shutters');
                t_slds_updateSlider('jalousie');
                t_slds_positionArrows('jalousie');
                t_slds_updateSlider('mosquito-net');
                t_slds_positionArrows('mosquito-net');
                t_slds_updateSlider('shpros');
                t_slds_positionArrows('shpros');
                t_slds_updateSlider('sills');
                t_slds_positionArrows('sills');
            });
        }
        if (document.getElementById("record-subtab-systems")) {
            subTab_init('subtab-systems');

            t_sldsInit('profile-wds-1');
            t_sldsInit('profile-wds-2');
            t_sldsInit('profile-wds-3');
            t_sldsInit('profile-wds-4');

            $('.slider-block').bind('displayChanged', function() {
                t_slds_updateSlider('profile-wds-1');
                t_slds_positionArrows('profile-wds-1');
                t_slds_updateSlider('profile-wds-2');
                t_slds_positionArrows('profile-wds-2');
                t_slds_updateSlider('profile-wds-3');
                t_slds_positionArrows('profile-wds-3');
                t_slds_updateSlider('profile-wds-4');
                t_slds_positionArrows('profile-wds-4');
            });
        }
        if (document.getElementById("record-subtab-glazed-windows")) {
            subTab_init('subtab-glazed-windows');

            t_sldsInit('standart');
            t_sldsInit('not-standart');
            t_sldsInit('decorative');

            $('.slider-block').bind('displayChanged', function() {
                t_slds_updateSlider('standart');
                t_slds_positionArrows('standart');
                t_slds_updateSlider('not-standart');
                t_slds_positionArrows('not-standart');
                t_slds_updateSlider('decorative');
                t_slds_positionArrows('decorative');
            });
        }
    }

    if (typeof preSelect == 'function') {
        preSelect();
    }
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
        s.src = "js/js__tilda-phone-mask-1.1.min.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, 'script');
} else {
    $(document).ready(function() {
        if (typeof t_form_phonemask_load == 'function') {
            t_form_phonemask_load($('#record-contact-us-block[data-phonemask-lid=telmask]'));
        }
    });
}

if (!window.mainTracker) {
    window.mainTracker = 'tilda';
}(function(d, w, k, o, g) {
    var n = d.getElementsByTagName(o)[0],
        s = d.createElement(o),
        f = function() {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.key = k;
    s.id = "tildastatscript";
    s.src = g;
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, '5b36f20db4f99e50afade13d06cc875d', 'script', 'https://stat.tildacdn.com/js/tildastat-0.2.min.js');