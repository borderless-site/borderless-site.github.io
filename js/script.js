window.addEventListener("resize", function(e) {
    handle_artist_img();
    handle_refer_item();
    handle_popup();
    calc_height();
});


handle_artist_img();
handle_refer_item();
handle_popup();
calc_height();


// functions
function close_event_link() {
    const event_link = document.querySelector("#event-link");
    const event_link_anchor = document.querySelector("#event-link-anchor");

    event_link.style.display = "none";
    event_link_anchor.href = "";
}

function handle_artist_img() {
    const artist_img = document.querySelectorAll(".artist-item");
    for (let i = 0; i < artist_img.length; i++) {
        artist_img[i].style.height = artist_img[i].offsetWidth * 0.65 + "px";
    }
}

function handle_refer_item() {
    const refer_item = document.querySelectorAll(".refer-item");
    for (let i = 0; i < refer_item.length; i++) {
        const artist_item = refer_item[i].parentElement.parentElement;
        refer_item[i].style.top = (artist_item.offsetHeight - refer_item[i].offsetHeight) / 2 + "px";
        refer_item[i].style.left = (artist_item.offsetWidth - refer_item[i].offsetWidth) / 2 + "px";
        refer_item[i].classList.remove("refer-item-enter");
    }
}

function handle_popup() {
    const popup = document.querySelectorAll(".popup");

    for (let i = 0; i < popup.length; i++) {
        popup[i].style.top = (window.innerHeight - popup[i].offsetHeight) / 2 + "px";
        popup[i].style.left = (window.innerWidth - popup[i].offsetWidth) / 2 + "px";
    }
}

function calc_height() {
    const reszie_height = document.querySelectorAll(".resize-height");
    for (let i = 0; i < reszie_height.length; i++) {
        reszie_height[i].style.height = window.innerHeight + 1 + "px";
    }
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}