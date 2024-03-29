function changeLang() {
    let selectLang = document.getElementById("record-language-selection");
    let lang = selectLang.options[selectLang.selectedIndex].value;
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
    setTimeout(setTextContent, 150); // looks like it needs time to load the file, that's why we give this time
}

function preSelect() {
    let selectLang;
    if (selectLang = document.getElementById("record-language-selection")) {
        selectLang.value = (!sessionStorage.getItem('lang')) ? "Uk" : sessionStorage.getItem('lang');
        selectLang.addEventListener("click", changeLang);
    }
    setTimeout(changeLang, 50);
}

function setTextContent() {
    document.querySelector("html").setAttribute("lang", (!sessionStorage.getItem('lang')) ? "uk" : sessionStorage.getItem('lang').toLowerCase());
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
            document.getElementById("record-footer-partners").innerHTML = dataPage.footer.partners;
            document.getElementById("record-footer-mainpage").innerHTML = dataPage.footer.mainPage;
            document.getElementById("record-footer-about-company").innerHTML = dataPage.footer.aboutCompany;
            document.getElementById("record-footer-contacts").innerHTML = dataPage.footer.contacts;
            document.getElementById("record-footer-contact-us").innerHTML = dataPage.footer.contactUs;
            document.getElementById("record-mainlogo-img").setAttribute("alt", dataPage.footer.altMain)
            document.getElementById("record-mainlogo-img").setAttribute("title", dataPage.footer.altMain)
            document.getElementById("record-furniturka-img").setAttribute("alt", dataPage.footer.altFurniture)
            document.getElementById("record-furniturka-img").setAttribute("title", dataPage.footer.altFurniture)
            document.getElementById("record-okna-ua-img").setAttribute("alt", dataPage.footer.altAP)
            document.getElementById("record-okna-ua-img").setAttribute("title", dataPage.footer.altAP)
        }
        if (document.querySelector("#record-contact-us-block")) {
            document.getElementById("record-popup-header").innerHTML = dataPage.contactUsBlock.header;
            document.getElementById("record-name-title").innerHTML = dataPage.contactUsBlock.name + ":";
            document.getElementById("record-name-input").setAttribute("placeholder", dataPage.contactUsBlock.name);
            document.getElementById("record-telephone-title").innerHTML = dataPage.contactUsBlock.phone + ":";
            document.getElementById("record-email-title").innerHTML = dataPage.contactUsBlock.email + ":";
            document.getElementById("record-email-input").setAttribute("placeholder", dataPage.contactUsBlock.email);
            document.getElementById("record-message-title").innerHTML = dataPage.contactUsBlock.message + ":";
            document.getElementById("record-message-textarea").setAttribute("placeholder", dataPage.contactUsBlock.message);
            document.getElementById("record-btn-send").innerHTML = dataPage.contactUsBlock.btnSend;
        }
        if (document.querySelector("#record-contact-block")) {
            document.getElementById("record-office-central").innerHTML = dataPage.contactBlock.centralOffice;
            document.getElementById("record-office-prod").innerHTML = dataPage.contactBlock.prodOffice;
        }
        if (document.querySelector("#record-subtab-windows") && typeof subTabWindowsData != "undefined") {
            let subTabWindows = JSON.parse(subTabWindowsData);
            document.getElementById("record-subtab-windows-1").innerHTML = subTabWindows.subTab1;
            document.getElementById("record-subtab-windows-2").innerHTML = subTabWindows.subTab2;
            document.getElementById("record-subtab-windows-3").innerHTML = subTabWindows.subTab3;
            document.getElementById("record-subtab-windows-4").innerHTML = subTabWindows.subTab4;
            if (document.querySelector(".subtab__wrapper_mobile")) {
                document.getElementById("record-subtab-windows-mob1").innerHTML = subTabWindows.subTab1;
                document.getElementById("record-subtab-windows-mob2").innerHTML = subTabWindows.subTab2;
                document.getElementById("record-subtab-windows-mob3").innerHTML = subTabWindows.subTab3;
                document.getElementById("record-subtab-windows-mob4").innerHTML = subTabWindows.subTab4;
            }
            if (document.querySelector("#record-standart-w")) {
                let firstSliderMeta = document.querySelectorAll(".meta-record-sld1_1");
                firstSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide1.title1));
                let firstSliderTitles = document.querySelectorAll(".record-title-sld1_1");
                firstSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.title1);
                let firstSliderContent = document.querySelectorAll(".record-content-sld1_1")
                firstSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.content1);
                let secondSliderMeta = document.querySelectorAll(".meta-record-sld1_2");
                secondSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide1.title2));
                let secondSliderTitles = document.querySelectorAll(".record-title-sld1_2");
                secondSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.title2);
                let secondSliderContent = document.querySelectorAll(".record-content-sld1_2")
                secondSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.content2);
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld1_3");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide1.title3));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld1_3");
                lastSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.title3);
                let lastSliderContent = document.querySelectorAll(".record-content-sld1_3")
                lastSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide1.content3);
            }
            if (document.querySelector("#record-not-standart-w")) {
                document.getElementById("meta-record-sld2_1").setAttribute("content", subTabWindows.subVersions.slide2.title1);
                document.getElementById("record-title-sld2_1").innerHTML = subTabWindows.subVersions.slide2.title1;
                document.getElementById("record-content-sld2_1").innerHTML = subTabWindows.subVersions.slide2.content1;
                document.getElementById("meta-record-sld2_2").setAttribute("content", subTabWindows.subVersions.slide2.title2);
                document.getElementById("record-title-sld2_2").innerHTML = subTabWindows.subVersions.slide2.title2;
                document.getElementById("record-content-sld2_2").innerHTML = subTabWindows.subVersions.slide2.content2;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld2_3");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide2.title3));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld2_3");
                lastSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide2.title3);
                let lastSliderContent = document.querySelectorAll(".record-content-sld2_3")
                lastSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide2.content3);
            }
            if (document.querySelector("#record-sliding-system-w")) {
                document.getElementById("meta-record-sld3_1").setAttribute("content", subTabWindows.subVersions.slide3.title1);
                document.getElementById("record-title-sld3_1").innerHTML = subTabWindows.subVersions.slide3.title1;
                document.getElementById("record-content-sld3_1").innerHTML = subTabWindows.subVersions.slide3.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld3_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide3.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld3_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide3.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld3_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide3.content2);
            }
            if (document.querySelector("#record-designer-w")) {
                document.getElementById("meta-record-sld4_1").setAttribute("content", subTabWindows.subVersions.slide4.title1);
                document.getElementById("record-title-sld4_1").innerHTML = subTabWindows.subVersions.slide4.title1;
                document.getElementById("meta-record-sld4_2").setAttribute("content", subTabWindows.subVersions.slide4.title2);
                document.getElementById("record-title-sld4_2").innerHTML = subTabWindows.subVersions.slide4.title2;
                let doubledSliderContent = document.querySelectorAll(".record-content-sld4_2")
                doubledSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide4.content2);
                document.getElementById("meta-record-sld4_3").setAttribute("content", subTabWindows.subVersions.slide4.title3);
                document.getElementById("record-title-sld4_3").innerHTML = subTabWindows.subVersions.slide4.title3;
                document.getElementById("record-content-sld4_3").innerHTML = subTabWindows.subVersions.slide4.content3;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld4_4");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabWindows.subVersions.slide4.title4));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld4_4");
                lastSliderTitles.forEach(el => el.innerHTML = subTabWindows.subVersions.slide4.title4);
                let lastSliderContent = document.querySelectorAll(".record-content-sld4_4")
                lastSliderContent.forEach(el => el.innerHTML = subTabWindows.subVersions.slide4.content4);
            }
        }
        if (document.querySelector("#record-subtab-doors") && typeof subTabDoorsData != "undefined") {
            let subTabDoors = JSON.parse(subTabDoorsData);
            document.getElementById("record-subtab-doors-1").innerHTML = subTabDoors.subTab1;
            document.getElementById("record-subtab-doors-2").innerHTML = subTabDoors.subTab2;
            document.getElementById("record-subtab-doors-3").innerHTML = subTabDoors.subTab3;
            document.getElementById("record-subtab-doors-4").innerHTML = subTabDoors.subTab4;
            if (document.querySelector(".subtab__wrapper_mobile")) {
                document.getElementById("record-subtab-doors-mob1").innerHTML = subTabDoors.subTab1;
                document.getElementById("record-subtab-doors-mob2").innerHTML = subTabDoors.subTab2;
                document.getElementById("record-subtab-doors-mob3").innerHTML = subTabDoors.subTab3;
                document.getElementById("record-subtab-doors-mob4").innerHTML = subTabDoors.subTab4;
            }
            if (document.querySelector("#record-single-leaf")) {
                document.getElementById("meta-record-sld1_1").setAttribute("content", subTabDoors.subVersions.slide1.title1);
                document.getElementById("record-title-sld1_1").innerHTML = subTabDoors.subVersions.slide1.title1;
                document.getElementById("record-content-sld1_1").innerHTML = subTabDoors.subVersions.slide1.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld1_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabDoors.subVersions.slide1.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld1_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabDoors.subVersions.slide1.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld1_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabDoors.subVersions.slide1.content2);
            }
            if (document.querySelector("#record-bivalve-shtulp")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld2_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabDoors.subVersions.slide2.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld2_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabDoors.subVersions.slide2.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld2_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabDoors.subVersions.slide2.content1);
            }
            if (document.querySelector("#record-sliding-systems")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld3_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabDoors.subVersions.slide3.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld3_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabDoors.subVersions.slide3.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld3_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabDoors.subVersions.slide3.content1);
            }
            if (document.querySelector("#record-hpl-doors")) {
                document.getElementById("meta-record-sld4_1").setAttribute("content", subTabDoors.subVersions.slide4.title1);
                document.getElementById("record-title-sld4_1").innerHTML = subTabDoors.subVersions.slide4.title1;
                document.getElementById("record-content-sld4_1").innerHTML = subTabDoors.subVersions.slide4.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld4_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabDoors.subVersions.slide4.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld4_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabDoors.subVersions.slide4.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld4_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabDoors.subVersions.slide4.content2);
            }
        }
        if (document.querySelector("#product-description-systems")) {
            document.getElementById("product-description-systems").innerHTML = dataPage.descrSystem;
        }
        if (document.querySelector("#record-subtab-systems") && typeof subTabSystemsData != "undefined") {
            let subTabSystems = JSON.parse(subTabSystemsData);
            document.getElementById("record-subtab-systems-1").innerHTML = subTabSystems.subTab1;
            document.getElementById("record-subtab-systems-2").innerHTML = subTabSystems.subTab2;
            document.getElementById("record-subtab-systems-3").innerHTML = subTabSystems.subTab3;
            document.getElementById("record-subtab-systems-4").innerHTML = subTabSystems.subTab4;
            if (document.querySelector(".subtab__wrapper_mobile")) {
                document.getElementById("record-subtab-systems-mob1").innerHTML = subTabSystems.subTab1;
                document.getElementById("record-subtab-systems-mob2").innerHTML = subTabSystems.subTab2;
                document.getElementById("record-subtab-systems-mob3").innerHTML = subTabSystems.subTab3;
                document.getElementById("record-subtab-systems-mob4").innerHTML = subTabSystems.subTab4;
            }
            if (document.querySelector("#record-profile-wds-1")) {
                let preLastSliderMeta = document.querySelectorAll(".meta-record-sld1_1");
                preLastSliderMeta.forEach(el => el.setAttribute("content", subTabSystems.subVersions.slide1.title1));
                let preLastSliderTitles = document.querySelectorAll(".record-title-sld1_1");
                preLastSliderTitles.forEach(el => el.innerHTML = subTabSystems.subVersions.slide1.title1);
                let preLastSliderContent = document.querySelectorAll(".record-content-sld1_1")
                preLastSliderContent.forEach(el => el.innerHTML = subTabSystems.subVersions.slide1.content1);
            }
            if (document.querySelector("#record-profile-wds-2")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld2_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabSystems.subVersions.slide2.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld2_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabSystems.subVersions.slide2.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld2_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabSystems.subVersions.slide2.content1);
            }
            if (document.querySelector("#record-profile-wds-3")) {
                let preLastSliderMeta = document.querySelectorAll(".meta-record-sld3_1");
                preLastSliderMeta.forEach(el => el.setAttribute("content", subTabSystems.subVersions.slide3.title1));
                let preLastSliderTitles = document.querySelectorAll(".record-title-sld3_1");
                preLastSliderTitles.forEach(el => el.innerHTML = subTabSystems.subVersions.slide3.title1);
                let preLastSliderContent = document.querySelectorAll(".record-content-sld3_1")
                preLastSliderContent.forEach(el => el.innerHTML = subTabSystems.subVersions.slide3.content1);
            }
            if (document.querySelector("#record-profile-wds-4")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld4_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabSystems.subVersions.slide4.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld4_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabSystems.subVersions.slide4.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld4_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabSystems.subVersions.slide4.content1);
            }
        }
        if (document.querySelector("#product-description-glazed-windows")) {
            document.getElementById("product-description-glazed-windows").innerHTML = dataPage.descrGlazedWindows;
        }
        if (document.querySelector("#record-subtab-glazed-windows") && typeof subTabGlazedWindowsData != "undefined") {
            let subTabGlazedWindows = JSON.parse(subTabGlazedWindowsData);
            document.getElementById("record-subtab-glazed-windows-1").innerHTML = subTabGlazedWindows.subTab1;
            document.getElementById("record-subtab-glazed-windows-2").innerHTML = subTabGlazedWindows.subTab2;
            document.getElementById("record-subtab-glazed-windows-3").innerHTML = subTabGlazedWindows.subTab3;
            if (document.querySelector(".subtab__wrapper_mobile")) {
                document.getElementById("record-subtab-glazed-windows-mob1").innerHTML = subTabGlazedWindows.subTab1;
                document.getElementById("record-subtab-glazed-windows-mob2").innerHTML = subTabGlazedWindows.subTab2;
                document.getElementById("record-subtab-glazed-windows-mob3").innerHTML = subTabGlazedWindows.subTab3;
            }
            if (document.querySelector("#record-standart")) {
                document.getElementById("meta-record-sld1_1").setAttribute("content", subTabGlazedWindows.subVersions.slide1.title1);
                document.getElementById("record-title-sld1_1").innerHTML = subTabGlazedWindows.subVersions.slide1.title1;
                document.getElementById("record-content-sld1_1").innerHTML = subTabGlazedWindows.subVersions.slide1.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld1_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabGlazedWindows.subVersions.slide1.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld1_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide1.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld1_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide1.content2);
            }
            if (document.querySelector("#record-not-standart")) {
                document.getElementById("meta-record-sld2_1").setAttribute("content", subTabGlazedWindows.subVersions.slide2.title1);
                document.getElementById("record-title-sld2_1").innerHTML = subTabGlazedWindows.subVersions.slide2.title1;
                document.getElementById("record-content-sld2_1").innerHTML = subTabGlazedWindows.subVersions.slide2.content2; // because same as 2_2
                document.getElementById("meta-record-sld2_2").setAttribute("content", subTabGlazedWindows.subVersions.slide2.title2);
                document.getElementById("record-title-sld2_2").innerHTML = subTabGlazedWindows.subVersions.slide2.title2;
                document.getElementById("record-content-sld2_2").innerHTML = subTabGlazedWindows.subVersions.slide2.content2;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld2_3");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabGlazedWindows.subVersions.slide2.title3));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld2_3");
                lastSliderTitles.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide2.title3);
                let lastSliderContent = document.querySelectorAll(".record-content-sld2_3")
                lastSliderContent.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide2.content3);
            }
            if (document.querySelector("#record-decorative")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld3_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabGlazedWindows.subVersions.slide3.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld3_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide3.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld3_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabGlazedWindows.subVersions.slide3.content1);
            }
        }
        if (document.querySelector("#choose-style-equipment")) {
            document.getElementById("choose-style-equipment").innerHTML = dataPage.chooseStyleEquipment;
        }
        if (document.querySelector("#record-subtab-equipment") && typeof subTabEquipmentData != "undefined") {
            let subTabEquipment = JSON.parse(subTabEquipmentData);
            document.getElementById("record-subtab-equipment-1").innerHTML = subTabEquipment.subTab1;
            document.getElementById("record-subtab-equipment-2").innerHTML = subTabEquipment.subTab2;
            document.getElementById("record-subtab-equipment-3").innerHTML = subTabEquipment.subTab3;
            document.getElementById("record-subtab-equipment-4").innerHTML = subTabEquipment.subTab4;
            document.getElementById("record-subtab-equipment-5").innerHTML = subTabEquipment.subTab5;
            document.getElementById("record-subtab-equipment-6").innerHTML = subTabEquipment.subTab6;
            if (document.querySelector(".subtab__wrapper_mobile")) {
                document.getElementById("record-subtab-equipment-mob1").innerHTML = subTabEquipment.subTab1;
                document.getElementById("record-subtab-equipment-mob2").innerHTML = subTabEquipment.subTab2;
                document.getElementById("record-subtab-equipment-mob3").innerHTML = subTabEquipment.subTab3;
                document.getElementById("record-subtab-equipment-mob4").innerHTML = subTabEquipment.subTab4;
                document.getElementById("record-subtab-equipment-mob5").innerHTML = subTabEquipment.subTab5;
                document.getElementById("record-subtab-equipment-mob6").innerHTML = subTabEquipment.subTab6;
            }
            if (document.querySelector("#record-protective-shutters")) {
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld1_1");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide1.title1));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld1_1");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide1.title1);
                let lastSliderContent = document.querySelectorAll(".record-content-sld1_1")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide1.content1);
            }
            if (document.querySelector("#record-roller-shutters")) {
                document.getElementById("meta-record-sld2_1").setAttribute("content", subTabEquipment.subVersions.slide2.title1);
                document.getElementById("record-title-sld2_1").innerHTML = subTabEquipment.subVersions.slide2.title1;
                document.getElementById("record-content-sld2_1").innerHTML = subTabEquipment.subVersions.slide2.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld2_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide2.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld2_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide2.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld2_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide2.content2);
            }
            if (document.querySelector("#record-jalousie")) {
                document.getElementById("meta-record-sld3_1").setAttribute("content", subTabEquipment.subVersions.slide3.title1);
                document.getElementById("record-title-sld3_1").innerHTML = subTabEquipment.subVersions.slide3.title1;
                document.getElementById("record-content-sld3_1").innerHTML = subTabEquipment.subVersions.slide3.content1;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld3_2");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide3.title2));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld3_2");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide3.title2);
                let lastSliderContent = document.querySelectorAll(".record-content-sld3_2")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide3.content2);
            }
            if (document.querySelector("#record-mosquito-net")) {
                document.getElementById("meta-record-sld4_1").setAttribute("content", subTabEquipment.subVersions.slide4.title1);
                document.getElementById("record-title-sld4_1").innerHTML = subTabEquipment.subVersions.slide4.title1;
                document.getElementById("record-content-sld4_1").innerHTML = subTabEquipment.subVersions.slide4.content1;
                document.getElementById("meta-record-sld4_2").setAttribute("content", subTabEquipment.subVersions.slide4.title2);
                document.getElementById("record-title-sld4_2").innerHTML = subTabEquipment.subVersions.slide4.title2;
                document.getElementById("record-content-sld4_2").innerHTML = subTabEquipment.subVersions.slide4.content2;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld4_3");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide4.title3));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld4_3");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide4.title3);
                let lastSliderContent = document.querySelectorAll(".record-content-sld4_3")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide4.content3);
            }
            if (document.querySelector("#record-shpros")) {
                document.getElementById("meta-record-sld5_1").setAttribute("content", subTabEquipment.subVersions.slide5.title1);
                document.getElementById("record-title-sld5_1").innerHTML = subTabEquipment.subVersions.slide5.title1;
                document.getElementById("record-content-sld5_1").innerHTML = subTabEquipment.subVersions.slide5.content1;
                document.getElementById("meta-record-sld5_2").setAttribute("content", subTabEquipment.subVersions.slide5.title2);
                document.getElementById("record-title-sld5_2").innerHTML = subTabEquipment.subVersions.slide5.title2;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld5_3");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide5.title3));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld5_3");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide5.title3);
                let lastSliderContent = document.querySelectorAll(".record-content-sld5_3")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide5.content3); // 5_2 same as 5_3
            }
            if (document.querySelector("#record-sills")) {
                document.getElementById("meta-record-sld6_1").setAttribute("content", subTabEquipment.subVersions.slide6.title1);
                document.getElementById("record-title-sld6_1").innerHTML = subTabEquipment.subVersions.slide6.title1;
                document.getElementById("record-content-sld6_1").innerHTML = subTabEquipment.subVersions.slide6.content1;
                let dobledSliderMeta = document.querySelectorAll(".meta-record-sld6_2");
                dobledSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide6.title2));
                let doubledSliderTitles = document.querySelectorAll(".record-title-sld6_2");
                doubledSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide6.title2);
                let doubledSliderContent = document.querySelectorAll(".record-content-sld6_2")
                doubledSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide6.content2);
                document.getElementById("meta-record-sld6_4").setAttribute("content", subTabEquipment.subVersions.slide6.title4);
                document.getElementById("record-title-sld6_4").innerHTML = subTabEquipment.subVersions.slide6.title4;
                document.getElementById("record-content-sld6_4").innerHTML = subTabEquipment.subVersions.slide6.content4;
                let lastSliderMeta = document.querySelectorAll(".meta-record-sld6_5");
                lastSliderMeta.forEach(el => el.setAttribute("content", subTabEquipment.subVersions.slide6.title5));
                let lastSliderTitles = document.querySelectorAll(".record-title-sld6_5");
                lastSliderTitles.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide6.title5);
                let lastSliderContent = document.querySelectorAll(".record-content-sld6_5")
                lastSliderContent.forEach(el => el.innerHTML = subTabEquipment.subVersions.slide6.content5);
                // dog nail to update some large boxes
                t_slds_updateSlider('sills');
                t_slds_positionArrows('sills');
            }
        }
    } else { setTimeout(changeLang, 50); }
}