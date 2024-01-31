// lang-selector

let lang_selector_toggle = false;
let color_toggle = false;

const lang_selector = document.querySelector("#lang-selector");
lang_selector.addEventListener("click", function(e) {
    // e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    const lang = lang_selector.firstElementChild.innerText;
    const ko = document.querySelectorAll(".ko");
    const en = document.querySelectorAll(".en");

    const event_link_anchor = document.querySelector("#event-link-anchor");

    if (lang === "ENG") {
        lang_selector_toggle = true;

        lang_selector.firstElementChild.innerText = "한국어";

        event_link_anchor.innerText = "Booking";

        for (let i = 0; i < ko.length; i++) {
            ko[i].style.display = "none";
        }

        for (let i = 0; i < en.length; i++) {
            en[i].style.display = "block";
            en[i].style.animation = "popupupsmall 0.5s ease-in-out";
        }

        color_change_blue();

    } else {
        lang_selector_toggle = false;

        lang_selector.firstElementChild.innerText = "ENG"

        event_link_anchor.innerText = "예약하기";

        for (let i = 0; i < ko.length; i++) {
            ko[i].style.display = "block";
            ko[i].style.animation = "popupupsmall 0.5s ease-in-out";
        }

        for (let i = 0; i < en.length; i++) {
            en[i].style.display = "none";
        }

        color_change_red();
    }
});


// sub-menu

const sub_menu = document.querySelector("#sub-menu");

const sub_menu_item = Array.prototype.slice.call(document.querySelectorAll(".sub-menu-item"));

sub_menu_item.forEach(function(el, idx) {
    el.addEventListener("click", function(e) {
        if (idx !== 3) {
            if (el.children[0].style.color !== "rgb(150, 150, 150)") {
                const lang_selector = document.querySelector("#lang-selector");
                lang_selector.firstElementChild.style.color = "rgb(0, 0, 0)";
                lang_selector.firstElementChild.style.textShadow = "none";

                sub_menu.style.height = "auto";

                init_sub_menu_item_color();
                init_toggle_container();
                show_toggle_container(idx);

                el.children[0].style.color = "rgb(150, 150, 150)";
                el.children[1].style.color = "rgb(150, 150, 150)";

                el.children[0].style.textShadow = "none";
                el.children[1].style.textShadow = "none";

                const origin_text_ko = el.children[0].innerText;
                const origin_text_en = el.children[1].innerText;

                el.children[0].innerText = origin_text_ko + " ×";
                el.children[1].innerText = origin_text_en + " ×";

                const toggle_container = document.querySelectorAll(".toggle-container");
                const artwork = toggle_container[idx].querySelector(".artwork");
                if (artwork !== null && artwork !== "undefined") {
                    const first_image = artwork.querySelector(".slide-show");
                    first_image.classList.add("opacity");
                    const w = first_image.offsetWidth;
                    const h = first_image.offsetHeight;
                    if (w > h) {
                        first_image.style.width = "100%";
                        first_image.style.height = "auto";
                    } else {
                        first_image.style.width = "auto";
                        first_image.style.height = "100%";
                    }
                }
            } else {
                const lang_selector = document.querySelector("#lang-selector");
                lang_selector.firstElementChild.style.color = "rgb(255, 255, 255)";
                lang_selector.firstElementChild.style.textShadow = "rgb(0, 0, 0) 0px 1px 5px";

                init_sub_menu_item_color_white();
                init_toggle_container();

                if (window.innerWidth <= 768) {
                    sub_menu.style.height = 25 + "px";
                } else {
                    sub_menu.style.height = 40 + "px";
                }

                const origin_text_ko = el.children[0].innerText;
                el.children[0].innerText = origin_text_ko.replace(" ×", "");

                const origin_text_en = el.children[1].innerText;
                el.children[1].innerText = origin_text_en.replace(" ×", "");
            }
        } else {
            window.open("https://booking.naver.com/booking/12/bizes/163717");
        }
    });
});


// functions

function color_change_red() {
    const section_devide_item = document.querySelectorAll(".section-devide-item");
    for (let i = 0; i < section_devide_item.length; i++) {
        if (section_toggle[i] == true) {
            section_devide_item[i].style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
        }
    }

    const toggle_container = document.querySelectorAll(".toggle-container");
    for (let i = 0; i < toggle_container.length; i++) {
        toggle_container[i].style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
    }

    const popup = document.querySelectorAll(".popup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].style.background = "linear-gradient(0deg, rgba(253, 93, 96, 1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
    }

    const _background = document.querySelector("#background");
    _background.style.backgroundColor = "rgba(253, 93, 96, 1)";

    const popup_bg = document.querySelector("#popup-background");
    popup_bg.style.backgroundColor = "rgba(253, 93, 96, 0.95)";

    document.body.style.backgroundColor = "rgb(253, 93, 96)";

    color_toggle = false;
}

function color_change_blue() {
    const section_devide_item = document.querySelectorAll(".section-devide-item");
    for (let i = 0; i < section_devide_item.length; i++) {
        if (section_toggle[i]) {
            section_devide_item[i].style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
        }
    }

    const toggle_container = document.querySelectorAll(".toggle-container");
    for (let i = 0; i < toggle_container.length; i++) {
        toggle_container[i].style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
    }

    const popup = document.querySelectorAll(".popup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].style.background = "linear-gradient(0deg, rgba(11,154,171,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
    }

    const _background = document.querySelector("#background");
    _background.style.backgroundColor = "rgba(11, 154, 171, 1)";

    const popup_bg = document.querySelector("#popup-background");
    popup_bg.style.backgroundColor = "rgba(11, 154, 171, 0.95)";

    document.body.style.backgroundColor = "rgb(11, 154, 171)";

    color_toggle = true;
}

function init_sub_menu_item_color() {
    sub_menu_item.forEach(function(el, idx) {
        el.children[0].style.color = "rgb(0, 0, 0)";
        el.children[1].style.color = "rgb(0, 0, 0)";

        el.children[0].style.textShadow = "none";
        el.children[1].style.textShadow = "none";

        const origin_text_ko = el.children[0].innerText;
        el.children[0].innerText = origin_text_ko.replace(" ×", "");
        const origin_text_en = el.children[1].innerText;
        el.children[1].innerText = origin_text_en.replace(" ×", "");
    });
}

function init_sub_menu_item_color_white() {
    sub_menu_item.forEach(function(el, idx) {
        el.children[0].style.color = "rgb(255, 255, 255)";
        el.children[1].style.color = "rgb(255, 255, 255)";

        el.children[0].style.textShadow = "rgb(0, 0, 0) 0px 1px 5px";
        el.children[1].style.textShadow = "rgb(0, 0, 0) 0px 1px 5px";

        const origin_text_ko = el.children[0].innerText;
        el.children[0].innerText = origin_text_ko.replace(" ×", "");

        const origin_text_en = el.children[1].innerText;
        el.children[1].innerText = origin_text_en.replace(" ×", "");
    });
}

function init_toggle_container() {
    const toggle_container = document.querySelectorAll(".toggle-container");
    for (let i = 0; i < toggle_container.length; i++) {
        toggle_container[i].style.bottom = "-100vh";
        toggle_container[i].style.transition = "bottom 0.5s ease-in-out";
        document.body.style.overflow = "hidden";
        document.body.style.overflowY = "scroll";
    }
}

function show_toggle_container(_id) {
    const id = _id;
    const toggle_container = Array.prototype.slice.call(document.body.querySelectorAll(".toggle-container"));
    const bottom = toggle_container[id].style.bottom;

    if (bottom === "-100vh") {
        toggle_container[id].style.bottom = "0px";
        toggle_container[id].style.transition = "bottom 0.5s ease-in-out";
        document.body.style.overflow = "hidden";
        document.body.style.overflowY = "hidden";
    }
}