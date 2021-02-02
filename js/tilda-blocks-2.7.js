function subTab_init(recid) {
    var el = $('#record-' + recid);
    el.find('.subtab__tab').click(function() {
        el.find('.subtab__tab').removeClass('subtab__tab_active');
        $(this).addClass('subtab__tab_active');
        subTab_alltabs_updateContent(recid);
        subTab_updateSelect(recid);
        $('.t347').trigger('displayChanged');
        $('.t346').trigger('displayChanged');
        $('.t764, .t506, .t675, .t570, .our-production, .t397, .t504, .t498, .t778, .t592, .t477, .t480, .t511, .t552, .t132, .t598, .t599, .t650, .t659, .t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t433, .t418, .t268, .t428, .t532, .t601, .about-company, .t228, .t229, .navtab, .t520, .t615, .t517, .t688, .t744, .t609, .t604, .t670, .t686, .t554, .t230, .t486, .t117, .t422, .t616, .t121, .t801, .t412, .t760, .t827, .t829, .t762, .t826, .t734, .t726, .t799, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t518, .t396, .t728, .t738, .t544, .t780, .t698, .t509, .t431, .t700, .t223, .t539, .t577, .t226, .t754, .t776, .t-store, .t923').trigger('displayChanged');
        setTimeout(function() { $('.t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t410, .t433, .t418, .t520, .t829, .t396, .t738').trigger('displayChanged') }, 50);
        subTab_startUpdateLazyLoad($(this));
        if (window.lazy == 'y') { t_lazyload_update() }
    });
    subTab_alltabs_updateContent(recid);
    subTab_updateContentBySelect(recid);
    var bgcolor = el.css("background-color");
    var bgcolor_target = el.find(".subtab__select, .subtab__firefoxfix");
    bgcolor_target.css("background", bgcolor);
    $('#record-' + recid + ' .subtab__wrapper_mobile .subtab__select option').first().attr('selected', !0)
}

function subTab_alltabs_updateContent(recid) {
    var el = $('#record-' + recid);
    el.find(".subtab__tab").each(function(i) {
        var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
        rec_ids.forEach(function(rec_id, i, arr) {
            var rec_el = $('#record-' + rec_id);
            rec_el.attr('data-connect-with-tab', 'yes');
            rec_el.attr('data-animationappear', 'off');
            rec_el.addClass('turn__off')
        })
    });
    el.find(".subtab__tab_active").each(function(i) {
        var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
        rec_ids.forEach(function(rec_id, i, arr) {
            var rec_el = $('#record-' + rec_id);
            rec_el.removeClass('turn__off');
            rec_el.css('opacity', '')
        })
    })
}

function subTab_updateContentBySelect(recid) {
    var el = $('#record-' + recid);
    el.find(".subtab__select").change(function() {
        var select_val = el.find(".subtab__select").val();
        var tab_index = el.find(".subtab__tab[data-tab-rec-ids='" + select_val + "']");
        tab_index.trigger('click')
    })
}

function subTab_updateSelect(recid) {
    var el = $('#record-' + recid);
    var current_tab = el.find(".subtab__tab_active").attr('data-tab-rec-ids');
    var el_select = el.find(".subtab__select");
    el_select.val(current_tab)
}

function subTab_startUpdateLazyLoad($this) {
    var rec_ids = $this.attr('data-tab-rec-ids').split(',');
    rec_ids.forEach(function(rec_id, i, arr) {
        var rec_el = $('#record-' + rec_id);
        var video = rec_el.find('.t-video-lazyload');
        if (video.length > 0) {
            subtab_updateVideoLazyLoad(video)
        }
    })
}

function subTab_updateVideoLazyLoad(video) {
    setTimeout(function() {
        video.each(function() {
            var div = $(this);
            if (!div.hasClass('t-video__isload')) {
                var height = div.attr('data-videolazy-height') ? $(this).attr('data-videolazy-height') : '100%';
                if (height.indexOf('vh') != -1) { height = '100%' }
                var videoId = div.attr('data-videolazy-id').trim();
                var blockId = div.attr('data-blocklazy-id') || '';
                if (typeof div.attr('data-videolazy-two-id') != 'undefined') { var videoTwoId = '_' + div.attr('data-videolazy-two-id') + '_' } else { var videoTwoId = '' }
                if (div.attr('data-videolazy-type') == 'youtube') {
                    div.find('iframe').remove();
                    div.prepend('<iframe id="youtubeiframe' + videoTwoId + blockId + '" width="100%" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>')
                }
            }
            div.addClass('t-video__isload')
        })
    }, 0)
}

function navTab_setListMagin(recid, imglogo) {
    if ($(window).width() > 980) {
        var navtab__menu = $('#record-' + recid + ' .navtab');
        var navtab__leftpart = navtab__menu.find('.navtab__leftwrapper');
        var navtab__listpart = navtab__menu.find('.navtab__list');
        if (imglogo) {
            navtab__listpart.css("margin-right", navtab__leftpart.width())
        } else {
            navtab__listpart.css("margin-right", navtab__leftpart.width() + 30)
        }
    }
}

function navTab_highlight() {
    var url = window.location.href;
    if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    var pathname = window.location.pathname;
    pathname = pathname.slice(pathname.lastIndexOf("/"));
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "" || pathname == "index.html") { pathname = "/" }
    $(".navtab__list_item a[href='" + url + "']").addClass("t-active");
    $(".navtab__list_item a[href='" + url + "/']").addClass("t-active");
    $(".navtab__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".navtab__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".navtab__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".navtab__list_item a[href='/" + pathname + "/']").addClass("t-active");
    $(".navtab__list_item a[data-submenu='" + pathname + "']").addClass("t-active");
}

function navTab_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var navtab_navLinks = $("#record-" + recid + " .navtab__list_item a:not(.tooltipstered)[href*='#']");
        if (navtab_navLinks.length > 0) {
            navTab_catchScroll(navtab_navLinks)
        }
    }
}

function navTab_catchScroll(navtab_navLinks) {
    var navtab_clickedSectionId = null,
        navtab_sections = new Array(),
        navtab_sectionIdTonavigationLink = [],
        navtab_interval = 100,
        navtab_lastCall, navtab_timeoutId;
    navtab_navLinks = $(navtab_navLinks.get().reverse());
    navtab_navLinks.each(function() {
        var navtab_cursection = navTab_getSectionByHref($(this));
        if (typeof navtab_cursection.attr("id") != "undefined") { navtab_sections.push(navtab_cursection) }
        navtab_sectionIdTonavigationLink[navtab_cursection.attr("id")] = $(this)
    });
    $(window).bind('resize', t_throttle(function() { navTab_updateSectionsOffsets(navtab_sections) }, 200));
    $('.navtab').bind('displayChanged', function() { navTab_updateSectionsOffsets(navtab_sections) });
    setInterval(function() { navTab_updateSectionsOffsets(navtab_sections) }, 5000);
    setTimeout(function() {
        navTab_updateSectionsOffsets(navtab_sections);
        navTab_highlightNavLinks(navtab_navLinks, navtab_sections, navtab_sectionIdTonavigationLink, navtab_clickedSectionId)
    }, 1000);
    navtab_navLinks.click(function() {
        if (!$(this).hasClass("tooltipstered")) {
            navtab_navLinks.removeClass('t-active');
            navtab_sectionIdTonavigationLink[navTab_getSectionByHref($(this)).attr("id")].addClass('t-active');
            navtab_clickedSectionId = navTab_getSectionByHref($(this)).attr("id")
        }
    });
    $(window).scroll(function() {
        var navtab_now = new Date().getTime();
        if (navtab_lastCall && navtab_now < (navtab_lastCall + navtab_interval)) {
            clearTimeout(navtab_timeoutId);
            navtab_timeoutId = setTimeout(function() {
                navtab_lastCall = navtab_now;
                navtab_clickedSectionId = navTab_highlightNavLinks(navtab_navLinks, navtab_sections, navtab_sectionIdTonavigationLink, navtab_clickedSectionId)
            }, navtab_interval - (navtab_now - navtab_lastCall))
        } else {
            navtab_lastCall = navtab_now;
            navtab_clickedSectionId = navTab_highlightNavLinks(navtab_navLinks, navtab_sections, navtab_sectionIdTonavigationLink, navtab_clickedSectionId)
        }
    })
}

function navTab_updateSectionsOffsets(sections) {
    $(sections).each(function() {
        var navtab_curSection = $(this);
        navtab_curSection.attr("data-offset-top", navtab_curSection.offset().top)
    })
}

function navTab_getSectionByHref(curlink) {
    var navtab_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (curlink.is('[href*="#record-"]')) {
        return $(".r[id='" + navtab_curLinkValue.substring(1) + "']")
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + navtab_curLinkValue.substring(1) + "']")
    }
}

function navTab_highlightNavLinks(navtab_navLinks, navtab_sections, navtab_sectionIdTonavigationLink, navtab_clickedSectionId) {
    var navtab_scrollPosition = $(window).scrollTop(),
        navtab_valueToReturn = navtab_clickedSectionId;
    if (navtab_sections.length != 0 && navtab_clickedSectionId == null && navtab_sections[navtab_sections.length - 1].attr("data-offset-top") > (navtab_scrollPosition + 300)) { navtab_navLinks.removeClass('t-active'); return null }
    $(navtab_sections).each(function(e) {
        var navtab_curSection = $(this),
            navtab_sectionTop = navtab_curSection.attr("data-offset-top"),
            navtab_id = navtab_curSection.attr('id'),
            navtab_navLink = navtab_sectionIdTonavigationLink[navtab_id];
        if (((navtab_scrollPosition + 300) >= navtab_sectionTop) || (navtab_sections[0].attr("id") == navtab_id && navtab_scrollPosition >= $(document).height() - $(window).height())) {
            if (navtab_clickedSectionId == null && !navtab_navLink.hasClass('t-active')) {
                navtab_navLinks.removeClass('t-active');
                navtab_navLink.addClass('t-active');
                navtab_valueToReturn = null
            } else { if (navtab_clickedSectionId != null && navtab_id == navtab_clickedSectionId) { navtab_valueToReturn = null } }
            return !1
        }
    });
    return navtab_valueToReturn
}

function navTab_setPath() {}

function navTab_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".navtab").each(function() {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor)
            }
        })
    } else {
        $(".navtab").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes")
        })
    }
}

function navTab_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".navtab").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100))) }
                appearoffset = parseInt(appearoffset, 10);
                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({ "opacity": "1", "top": "0px" }, 200, function() {})
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden")
                }
            }
        })
    }
}

function navTab_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".navtab").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') { var menushadowvalue = menushadow } else { var menushadowvalue = '0.' + menushadow }
            if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacitytwo == '0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } } else { el.css("background-color", bgcolor); if (bgopacityone == '0.0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } }
        })
    }
}

function navTab_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#record-" + recid),
        menu = el.find(".navtab"),
        burger = el.find(".navtab__mobile");
    burger.click(function(e) {
        menu.fadeToggle(300);
        $(this).toggleClass("navtab_opened")
    });
    $(window).bind('resize', t_throttle(function() { window_width = $(window).width(); if (window_width > 980) { menu.fadeIn(0) } }, 200))
}

function aboutCompany_setHeight(recid) {
    var el = $('#record-' + recid);
    var sizer = el.find('.about-company__sizer');
    var height = sizer.height();
    var width = sizer.width();
    var ratio = width / height;
    var imgwrapper = el.find(".about-company__blockimg, .about-company__textwrapper");
    var imgwidth = imgwrapper.width();
    if (height != $(window).height()) {
        imgwrapper.css({ 'height': ((width / ratio) + 'px') })
    }
}

function contactUs_onSuccess(contactUs_form) {
    var contactUs_inputsWrapper = contactUs_form.find('.t-form__inputsbox');
    var contactUs_inputsHeight = contactUs_inputsWrapper.height();
    var contactUs_inputsOffset = contactUs_inputsWrapper.offset().top;
    var contactUs_inputsBottom = contactUs_inputsHeight + contactUs_inputsOffset;
    var contactUs_targetOffset = contactUs_form.find('.t-form__successbox').offset().top;
    if ($(window).width() > 960) {
        var contactUs_target = contactUs_targetOffset - 200
    } else {
        var contactUs_target = contactUs_targetOffset - 100
    }
    if (contactUs_targetOffset > $(window).scrollTop() || ($(document).height() - contactUs_inputsBottom) < ($(window).height() - 100)) {
        contactUs_inputsWrapper.addClass('conctact-us__inputsbox_hidden');
        setTimeout(function() {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({ opacity: 0 }, 50)
            }
        }, 300)
    } else {
        $('html, body').animate({ scrollTop: contactUs_target }, 400);
        setTimeout(function() { contactUs_inputsWrapper.addClass('conctact-us__inputsbox_hidden') }, 400)
    }
    var successurl = contactUs_form.data('success-url');
    if (successurl && successurl.length > 0) { setTimeout(function() { window.location.href = successurl }, 500) }
}

function contactUs_lockScroll() {
    var body = $("body");
    if (!body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        body.addClass('t-body_scroll-locked');
        body.css("top", "-" + bodyScrollTop + "px");
        body.attr("data-popup-scrolltop", bodyScrollTop)
    }
}

function contactUs_unlockScroll() {
    var body = $("body");
    if (body.hasClass('t-body_scroll-locked')) {
        var bodyScrollTop = $("body").attr("data-popup-scrolltop");
        body.removeClass('t-body_scroll-locked');
        body.css("top", "");
        body.removeAttr("data-popup-scrolltop");
        window.scrollTo(0, bodyScrollTop);
    }
}

function contactUs_showPopup(recid) {
    var el = $('#record-' + recid),
        popup = el.find('.t-popup');
    popup.css('display', 'block');
    el.find('.t-range').trigger('popupOpened');
    if (window.lazy == 'y') { t_lazyload_update() }
    setTimeout(function() {
        popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show')
    }, 50);
    $('body').addClass('t-body_popupshowed conctact-us__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) { setTimeout(function() { contactUs_lockScroll() }, 500) }
    el.find('.t-popup').mousedown(function(e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) { return }
        if (e.target == this) { contactUs_closePopup() }
    });
    el.find('.t-popup__close').click(function(e) { contactUs_closePopup() });
    el.find('a[href*="#"]').click(function(e) {
        var url = $(this).attr('href');
        if (!url || url.substring(0, 7) != '#price:') {
            contactUs_closePopup();
            if (!url || url.substring(0, 7) == '#popup:') {
                setTimeout(function() {
                    $('body').addClass('t-body_popupshowed')
                }, 300)
            }
        }
    });
    $(document).keydown(function(e) { if (e.keyCode == 27) { contactUs_closePopup() } })
}

function contactUs_closePopup() {
    $('body').removeClass('t-body_popupshowed conctact-us__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) { contactUs_unlockScroll() }
    $('.t-popup').removeClass('t-popup_show');
    setTimeout(function() { $('.t-popup').not('.t-popup_show').css('display', 'none') }, 300)
}

function contactUs_resizePopup(recid) {
    var el = $("#record-" + recid),
        div = el.find(".t-popup__container").height(),
        win = $(window).height() - 120,
        popup = el.find(".t-popup__container");
    if (div > win) { popup.addClass('t-popup__container-static') } else { popup.removeClass('t-popup__container-static') }
}

function contactUs_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') { popupname = popupname.substring(7) }
    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') { Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0) } else {
        if (ga) { if (window.mainTracker != 'tilda') { ga('send', { 'hitType': 'pageview', 'page': virtPage, 'title': virtTitle }) } }
        if (window.mainMetrika > '' && window[window.mainMetrika]) { window[window.mainMetrika].hit(virtPage, { title: virtTitle, referer: window.location.href }) }
    }
}

function contactUs_initPopup(recid) {
    $('#record-' + recid).attr('data-animationappear', 'off');
    $('#record-' + recid).css('opacity', '1');
    var el = $('#record-' + recid).find('.t-popup'),
        hook = el.attr('data-tooltip-hook'),
        analitics = el.attr('data-track-popup');
    if (hook !== '') {
        var obj = $('a[href="' + hook + '"]');
        obj.click(function(e) {
            contactUs_showPopup(recid);
            contactUs_resizePopup(recid);
            e.preventDefault();
            if (window.lazy == 'y') { t_lazyload_update() }
            if (analitics > '') {
                var virtTitle = hook;
                if (virtTitle.substring(0, 7) == '#popup:') { virtTitle = virtTitle.substring(7) }
                Tilda.sendEventToStatistics(analitics, virtTitle)
            }
        })
    }
}

function ourProduction_init(recid) {
    ourProduction_unifyHeights(recid);
    $(window).bind('resize', t_throttle(function() { ourProduction_unifyHeights(recid) }, 200));
    $(".our-production").bind("displayChanged", function() { ourProduction_unifyHeights(recid) });
    $(window).load(function() { ourProduction_unifyHeights(recid) });
    setTimeout(function() { ourProduction__updateLazyLoad(recid) }, 500)
}

function ourProduction__updateLazyLoad(recid) {
    var scrollContainer = $("#record-" + recid + " .our-production__container_mobile-flex");
    var curMode = $(".t-records").attr("data-tilda-mode");
    if (scrollContainer.length && curMode != "edit" && curMode != "preview" && window.lazy === "y") {
        scrollContainer.bind('scroll', t_throttle(function() {
            t_lazyload_update()
        }, 500))
    }
}

function ourProduction_unifyHeights(recid) {
    var ourProduction_el = $('#record-' + recid),
        ourProduction_blocksPerRow = ourProduction_el.find(".our-production__container").attr("data-blocks-per-row"),
        ourProduction_cols = ourProduction_el.find(".our-production__content"),
        ourProduction_mobScroll = ourProduction_el.find(".our-production__scroll-icon-wrapper").length;
    if ($(window).width() <= 480 && ourProduction_mobScroll == 0) { ourProduction_cols.css("height", "auto"); return }
    var ourProduction_perRow = +ourProduction_blocksPerRow;
    if ($(window).width() <= 960 && ourProduction_mobScroll > 0) {
        var ourProduction_perRow = ourProduction_cols.length
    } else {
        if ($(window).width() <= 960) {
            var ourProduction_perRow = 2
        }
    }
    for (var i = 0; i < ourProduction_cols.length; i += ourProduction_perRow) {
        var ourProduction_maxHeight = 0,
            ourProduction_row = ourProduction_cols.slice(i, i + ourProduction_perRow);
        ourProduction_row.each(function() {
            var ourProduction_curText = $(this).find(".our-production__textwrapper"),
                ourProduction_curBtns = $(this).find(".our-production__btn-wrapper, .our-production__btntext-wrapper"),
                ourProduction_itemHeight = ourProduction_curText.outerHeight() + ourProduction_curBtns.outerHeight();
            if (ourProduction_itemHeight > ourProduction_maxHeight) { ourProduction_maxHeight = ourProduction_itemHeight }
        });
        ourProduction_row.css("height", ourProduction_maxHeight)
    }
}