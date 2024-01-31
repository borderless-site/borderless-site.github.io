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

    if (lang === "ENG") {
        lang_selector_toggle = true;

        lang_selector.firstElementChild.innerText = "한국어";

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


// functions

function color_change_red() {
    const popup = document.querySelectorAll(".popup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].style.background = "linear-gradient(0deg, rgba(253, 93, 96, 1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
    }

    document.body.style.backgroundColor = "rgb(253, 93, 96)";

    color_toggle = false;
}

function color_change_blue() {
    const popup = document.querySelectorAll(".popup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].style.background = "linear-gradient(0deg, rgba(11,154,171,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
    }

    document.body.style.backgroundColor = "rgb(11, 154, 171)";

    color_toggle = true;
}