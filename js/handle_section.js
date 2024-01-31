const section_toggle = [false, false, false];
const section_devide_item = Array.prototype.slice.call(document.querySelectorAll(".section-devide-item"));


// resize

window.addEventListener("resize", function(e) {
    for (let i = 0; i < section_devide_item.length; i++) {
        if (section_toggle[i]) {
            const heading = section_devide_item[i].firstElementChild;
            const body = heading.nextElementSibling;
            const artist = body.nextElementSibling;
            const close = artist.nextElementSibling;
            const section_img = section_devide_item[i].firstElementChild.firstElementChild;

            if (check_mobile()) {
                heading.children[1].style.width = "100%";
                heading.children[1].style.opacity = 1;
                section_devide_item[i].style.cursor = "pointer";
                section_devide_item[i].style.backgroundColor = "rgb(0, 0, 0)";

                section_devide_item[i].style.padding = "40px 20px 20px 20px";
                section_img.style.marginBottom = 20 + "px";
                heading.style.height = 220 + "px";

                heading.children[1].style.width = 0;
                heading.children[1].style.opacity = 0;

                section_devide_item[i].style.position = "relative";
                section_devide_item[i].style.cursor = "auto";
                section_devide_item[i].style.width = "100%";
                section_devide_item[i].style.maxHeight = "5000px";

                body.style.display = "flex";
                artist.style.display = "flex";
                close.style.display = "flex";
                section_img.style.fill = "rgb(0, 0, 0)";

                handle_artist_img();
            } else if (window.innerWidth > 767.8 && window.innerWidth <= 1000) {
                section_devide_item[i].style.padding = "25px";
                section_img.style.marginBottom = 50 + "px";
                heading.style.height = 600 + "px";

                heading.children[1].style.width = 0;
                heading.children[1].style.opacity = 0;

                section_devide_item[i].style.position = "relative";
                section_devide_item[i].style.cursor = "auto";
                section_devide_item[i].style.width = "100%";
                section_devide_item[i].style.maxHeight = "5000px";

                body.style.display = "flex";
                artist.style.display = "flex";
                close.style.display = "flex";
                section_img.style.fill = "rgb(0, 0, 0)";

                handle_artist_img();
            } else {
                section_devide_item[i].style.padding = "75px 75px 35px 75px";
                section_img.style.marginBottom = 50 + "px";
                heading.style.height = 600 + "px";

                heading.children[1].style.width = 0;
                heading.children[1].style.opacity = 0;

                section_devide_item[i].style.position = "relative";
                section_devide_item[i].style.cursor = "auto";
                section_devide_item[i].style.width = "100%";
                section_devide_item[i].style.maxHeight = "5000px";

                body.style.display = "flex";
                artist.style.display = "flex";
                close.style.display = "flex";
                section_img.style.fill = "rgb(0, 0, 0)";

                handle_artist_img();
            }
        }
    }
});


// section click

section_devide_item.forEach(function(el, idx) {
    section_devide_item[idx].addEventListener("click", function(e) { // click
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (this.style.height !== "auto" && !section_toggle[idx]) {
            section_toggle[idx] = true;

            const heading = this.firstElementChild;
            const body = heading.nextElementSibling;
            const artist = body.nextElementSibling;
            const close = artist.nextElementSibling;
            const section_img = this.firstElementChild.firstElementChild;

            document.documentElement.scrollTop = window.innerHeight + this.offsetTop + 1;

            if (check_mobile()) {
                heading.children[1].style.width = "100%";
                heading.children[1].style.opacity = 1;
                this.style.cursor = "pointer";
                this.style.backgroundColor = "rgb(0, 0, 0)";

                setTimeout(function(e) {
                    this.style.padding = "40px 20px 20px 20px";
                    section_img.style.marginBottom = 20 + "px";
                    heading.style.height = 220 + "px";

                    heading.children[1].style.width = 0;
                    heading.children[1].style.opacity = 0;

                    this.style.position = "relative";
                    this.style.cursor = "auto";
                    this.style.width = "100%";
                    this.style.maxHeight = "5000px";
                    if (color_toggle) {
                        this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
                    } else {
                        this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
                    }

                    body.style.display = "flex";
                    artist.style.display = "flex";
                    close.style.display = "flex";
                    section_img.style.fill = "rgb(0, 0, 0)";

                    handle_artist_img();
                }.bind(this), 1000);
            } else if (window.innerWidth > 767.8 && window.innerWidth <= 1000) {
                this.style.padding = "25px";
                section_img.style.marginBottom = 50 + "px";
                heading.style.height = 600 + "px";

                heading.children[1].style.width = 0;
                heading.children[1].style.opacity = 0;

                this.style.position = "relative";
                this.style.cursor = "auto";
                this.style.width = "100%";
                this.style.maxHeight = "5000px";
                if (color_toggle) {
                    this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
                } else {
                    this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
                }

                body.style.display = "flex";
                artist.style.display = "flex";
                close.style.display = "flex";
                section_img.style.fill = "rgb(0, 0, 0)";

                handle_artist_img();
            } else {
                this.style.padding = "75px 75px 35px 75px";
                section_img.style.marginBottom = 50 + "px";
                heading.style.height = 600 + "px";

                heading.children[1].style.width = 0;
                heading.children[1].style.opacity = 0;

                this.style.position = "relative";
                this.style.cursor = "auto";
                this.style.width = "100%";
                this.style.maxHeight = "5000px";
                if (color_toggle) {
                    this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(11,154,171,1) 100%)";
                } else {
                    this.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(253,93,96,1) 100%)";
                }

                body.style.display = "flex";
                artist.style.display = "flex";
                close.style.display = "flex";
                section_img.style.fill = "rgb(0, 0, 0)";

                handle_artist_img();
            }
        }
    });

    section_devide_item[idx].addEventListener("mouseenter", function(e) { // mouseenter
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!section_toggle[idx]) {
            const heading = this.firstElementChild;
            heading.children[1].style.width = "100%";
            heading.children[1].style.opacity = 1;
            this.style.cursor = "pointer";
            this.style.backgroundColor = "rgb(0, 0, 0)";
        }
    });

    section_devide_item[idx].addEventListener("mouseleave", function(e) { // mouseleave
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!section_toggle[idx]) {
            const heading = this.firstElementChild;
            heading.children[1].style.width = 0;
            heading.children[1].style.opacity = 0;
            this.style.backgroundColor = "transparent";
        }
    });
});


// section close

const section_close = Array.prototype.slice.call(document.querySelectorAll(".section-close-img"));
section_close.forEach(function(el, idx) {
    section_close[idx].addEventListener("click", function(e) { // click
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const section = this.parentElement.parentElement;

        document.documentElement.scrollTop = window.innerHeight + section.offsetTop + 1;

        section_toggle[idx] = false;

        const heading = section.firstElementChild;
        const body = heading.nextElementSibling;
        const artist = body.nextElementSibling;
        const close = artist.nextElementSibling;
        const section_img = section.firstElementChild.firstElementChild;

        if (check_mobile()) {
            heading.style.height = "calc(var(--vh, 1vh) * 33.3333)";
            section.style.background = "transparent";
            //
            heading.children[1].style.width = 0;
            heading.children[1].style.opacity = 0;
            section.style.backgroundColor = "transparent";
        } else {
            heading.style.height = "650px";
            section.style.background = "transparent";
        }

        section.style.padding = 0 + "px";
        section_img.style.fill = "rgb(255, 255, 255)";
        section_img.style.marginBottom = 0 + "px";
        body.style.display = "none";
        artist.style.display = "none";
        close.style.display = "none";
    });
});


// functions

function check_mobile() {
    let mobile;
    if (window.innerWidth <= 768) {
        mobile = true;
    } else {
        mobile = false;
    }
    return mobile;
}