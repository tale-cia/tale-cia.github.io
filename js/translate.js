changeLang((!sessionStorage.getItem('lang')) ? "Ua" : sessionStorage.getItem('lang'));

function changeLang(lang) {
    let previousLang = document.getElementById("scriptLang" + sessionStorage.getItem('lang')); // session && if == current
    if (previousLang) {
        previousLang.parentNode.removeChild(previousLang);
    }
    sessionStorage.setItem('lang', lang);

    let fileRef = document.createElement('script');
    fileRef.setAttribute("type", "text/javascript");
    fileRef.setAttribute("src", 'js/lang' + lang + '.json');
    fileRef.setAttribute("id", "scriptLang" + lang)
    document.getElementsByTagName("head")[0].appendChild(fileRef);
    setTimeout(setTextContent, 100); // looks like it needs time to load the file, that's why we give this time
}

function setTextContent() {
    if (typeof data != "undefined") {
        let dataPage = JSON.parse(data);
        if (document.querySelector("#record-navheader-list")) {
            document.getElementById("record-header-main").innerHTML = dataPage.headerMenu.main;
            document.getElementById("record-header-windows").innerHTML = dataPage.headerMenu.windows;
            document.getElementById("record-header-doors").innerHTML = dataPage.headerMenu.doors;
            document.getElementById("record-header-equipment").innerHTML = dataPage.headerMenu.equipment;
            document.getElementById("record-header-production").innerHTML = dataPage.headerMenu.production;
            document.getElementById("record-header-systems").innerHTML = dataPage.headerMenu.systems;
            document.getElementById("record-header-glazed-windows").innerHTML = dataPage.headerMenu.glazedWindows;
            document.getElementById("record-header-contacts").innerHTML = dataPage.headerMenu.contacts;
        }
        if (document.querySelector("#record-cover-windows")) document.getElementById("record-cover-windows").innerHTML = dataPage.headerMenu.windows;
        if (document.querySelector("#record-cover-doors")) document.getElementById("record-cover-doors").innerHTML = dataPage.headerMenu.doors;
        if (document.querySelector("#record-cover-equipment")) document.getElementById("record-cover-equipment").innerHTML = dataPage.headerMenu.equipment;
        if (document.querySelector("#record-cover-production")) document.getElementById("record-cover-production").innerHTML = dataPage.headerMenu.production;
        if (document.querySelector("#record-cover-systems")) document.getElementById("record-cover-systems").innerHTML = dataPage.headerMenu.systems;
        if (document.querySelector("#record-cover-glazed-windows")) document.getElementById("record-cover-glazed-windows").innerHTML = dataPage.headerMenu.glazedWindows;
        if (document.querySelector("#record-cover-contacts")) document.getElementById("record-cover-contacts").innerHTML = dataPage.headerMenu.contacts;
        if (document.querySelector("#record-short-intro")) {
            document.getElementById("record-short-description").innerHTML = dataPage.shortIntro.shortDescription;
            document.getElementById("record-btn-contact-us").innerHTML = dataPage.shortIntro.btnContactUs;
            document.getElementById("record-btn-about-company").innerHTML = dataPage.shortIntro.btnAboutCompany;
        }
        if (document.querySelector("#record-about-company-block")) {
            document.getElementById("record-header-about-company").innerHTML = dataPage.aboutCompanyBlock.header;
            document.getElementById("record-description").innerHTML = dataPage.aboutCompanyBlock.description;
            document.getElementById("record-btn-about-contact-us").innerHTML = dataPage.aboutCompanyBlock.btnAboutContactUs;
        }
        if (document.querySelector("#record-our-production")) {
            document.getElementById("record-header-our-production").innerHTML = dataPage.ourProduction.header;
            document.getElementById("record-windows-header").innerHTML = dataPage.ourProduction.windowsHeader;
            document.getElementById("record-windows-description").innerHTML = dataPage.ourProduction.windowsDescription;
            document.getElementById("record-doors-header").innerHTML = dataPage.ourProduction.doorsHeader;
            document.getElementById("record-doors-description").innerHTML = dataPage.ourProduction.doorsDescription;
            document.getElementById("record-equipment-header").innerHTML = dataPage.ourProduction.equipmentHeader;
            document.getElementById("record-equipment-description").innerHTML = dataPage.ourProduction.equipmentDescription;
            let more = document.querySelectorAll(".our-production__btn-more")
            more.forEach(element => element.innerHTML = dataPage.ourProduction.more)
        }
        if (document.querySelector("#t-footer")) {
            document.getElementById("record-all-rights-reserved").innerHTML = dataPage.footer.rightsReserved;
            document.getElementById("record-footer-header").innerHTML = dataPage.footer.header;
            document.getElementById("record-footer-mainpage").innerHTML = dataPage.footer.mainPage;
            document.getElementById("record-footer-about-company").innerHTML = dataPage.footer.aboutCompany;
            document.getElementById("record-footer-contacts").innerHTML = dataPage.footer.contacts;
            document.getElementById("record-footer-contact-us").innerHTML = dataPage.footer.contactUs;
            document.getElementById("record-footer-partners").innerHTML = dataPage.footer.partners;
            document.getElementById("record-okna-ua-img").setAttribute("alt", dataPage.footer.alt)
        }
    }
}