// artist_item

const artist_item = document.querySelectorAll(".artist-item");

for (let i = 0; i < artist_item.length; i++) {
    let name; // name-conatiner
    const name_container = document.querySelector("#name-container");
    const name_change = name_container.querySelector(".selected-artist-name");

    artist_item[i].addEventListener("mouseenter", function(e) { // mouseenter
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        if (!lang_selector_toggle) {
            name = this.querySelectorAll(".artist-name")[0].innerText;
        } else {
            name = this.querySelectorAll(".artist-name")[1].innerText;
        }

        const match = name.toLowerCase().replace(" ", "");

        name_container.style.display = "flex";
        name_container.style.opacity = 1;
        name_change.src = "../assets/global/artist_name/" + match + ".png";

        const reference = this.firstElementChild.children; // mouseenter: reference
        for (let j = 0; j < reference.length; j++) {
            reference[j].style.top = Math.floor(Math.random() * ((this.offsetHeight - 50) - (-50)) + (-50)) + "px";
            reference[j].style.left = Math.floor(Math.random() * ((this.offsetWidth - 50) - (-50)) + (-50)) + "px";
            reference[j].classList.add("refer-item-enter");
        }
    });

    artist_item[i].addEventListener("mouseleave", function(e) { // mouseleave
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        name_container.style.display = "none";
        name_container.style.opacity = 0;
        name_change.innerText = name;

        const reference = this.firstElementChild.children; // mouseleave: reference
        for (let j = 0; j < reference.length; j++) {
            reference[j].style.top = (this.offsetHeight - reference[j].offsetHeight) / 2 + "px";
            reference[j].style.left = (this.offsetWidth - reference[j].offsetWidth) / 2 + "px";
            reference[j].classList.remove("refer-item-enter");
        }
    });

    artist_item[i].addEventListener("click", function(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();

        const artist_name = this.children[1].children[1].innerText;

        if (artist_name === "김보용") {
            const event_link = document.querySelector("#event-link");
            const event_link_anchor = document.querySelector("#event-link-anchor");
            event_link.style.display = "flex";
            event_link_anchor.href = "https://m.booking.naver.com/booking/12/bizes/163717/items/3844592?area=plt&theme=place";
        }

        if (window.innerWidth <= 768) {
            setTimeout(function(e) {
                const popup = this.querySelector(".popup");
                popup.classList.add("popup-view");
                popup.style.top = (window.innerHeight - popup.offsetHeight) / 2 + "px";
                popup.style.left = (window.innerWidth - popup.offsetWidth) / 2 + "px";

                const popup_background = document.querySelector("#popup-background");
                popup_background.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.overflowY = "hidden";

                const sub_menu = document.querySelector("#sub-menu");
                sub_menu.style.display = "none";

                const close_img = this.querySelector(".close-btn-container");
                close_img.style.display = "block";
            }.bind(this), 1000);
        } else {
            const popup = this.querySelector(".popup");
            popup.classList.add("popup-view");
            popup.style.top = (window.innerHeight - popup.offsetHeight) / 2 + "px";
            popup.style.left = (window.innerWidth - popup.offsetWidth) / 2 + "px";

            const popup_background = document.querySelector("#popup-background");
            popup_background.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.overflowY = "hidden";

            const sub_menu = document.querySelector("#sub-menu");
            sub_menu.style.display = "none";

            const close_img = this.querySelector(".close-btn-container");
            close_img.style.display = "block";
        }

        const artwork = this.querySelector(".popup").querySelectorAll(".artwork");
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

        const reference = this.querySelectorAll(".refer-img-container");
        for (let j = 0; j < reference.length; j++) {
            const first_image = reference[j].firstElementChild;
            first_image.addEventListener("load", function(e) {
                const w = first_image.offsetWidth;
                const h = first_image.offsetHeight;
                if (w > h) {
                    if (window.innerWidth <= 768) {
                        if (h > 400) {
                            first_image.style.width = "300px";
                            first_image.style.height = "auto";
                        } else {
                            first_image.style.width = "100%";
                            first_image.style.height = "auto";
                        }
                    } else {
                        if (h > 600) {
                            first_image.style.width = "600px";
                            first_image.style.height = "auto";
                        } else {
                            first_image.style.width = "100%";
                            first_image.style.height = "auto";
                        }
                    }
                } else {
                    if (window.innerWidth <= 768) {
                        first_image.style.width = "auto";
                        first_image.style.height = "100%";
                        first_image.style.maxHeight = "300px";
                    } else {
                        first_image.style.width = "auto";
                        first_image.style.height = "100%";
                        first_image.style.maxHeight = "600px";
                    }
                }
            })
        }
    });
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