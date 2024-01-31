// artist_item

const artist_item = document.querySelectorAll(".artist-item");

for (let i = 0; i < artist_item.length; i++) {
    const artwork = artist_item[i].querySelector(".popup").querySelectorAll(".artwork");
    for (let j = 0; j < artwork.length; j++) {
        const first_image = artwork[j].querySelector(".img-container").firstElementChild;
        first_image.addEventListener("load", function(e) {
            const w = first_image.offsetWidth;
            const h = first_image.offsetHeight;
            first_image.classList.add("opacity");
            if (w > h) {
                first_image.style.width = "100%";
                first_image.style.height = "auto";
            } else {
                first_image.style.width = "auto";
                first_image.style.height = "100%";
            }
        });
    }
}


// close_btn

const close_btn_container = document.querySelectorAll(".close-btn-container");

for (let i = 0; i < close_btn_container.length; i++) {
    close_btn_container[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        close_event_link();

        const popup = this.nextElementSibling;
        popup.classList.remove("popup-view");

        const popup_background = document.querySelector("#popup-background");
        popup_background.style.display = "none";
        document.body.style.overflowY = "scroll";

        const sub_menu = document.querySelector("#sub-menu");
        sub_menu.style.display = "flex";

        this.style.display = "none";
    });
}