// count

const count = document.querySelectorAll(".count");
for (let i = 0; i < count.length; i++) {
    const container = count[i].previousElementSibling;
    const images = container.children[0].children;

    count[i].children[1].innerText = "　/　" + images.length;
}


// nav right

const nav_right = document.querySelectorAll(".nav-right");
for (let i = 0; i < nav_right.length; i++) {
    const container = nav_right[i].parentElement.previousElementSibling;
    const images = container.children;
    const count = nav_right[i].parentElement.parentElement.nextElementSibling.firstElementChild;

    nav_right[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        for (let j = 0; j < images.length; j++) {
            const value = images[j].className;
            if (value.indexOf("slide-show") >= 0 && j + 1 < images.length) {
                images[j].classList.remove("slide-show");
                count.innerText = j + 2;

                const current = images[j + 1];
                current.classList.add("slide-show");
                current.addEventListener("load", function(e) {
                    const w = current.offsetWidth;
                    const h = current.offsetHeight;
                    if (w > h) {
                        current.style.width = "100%";
                        current.style.height = "auto";
                    } else {
                        current.style.width = "auto";
                        current.style.height = "100%";
                    }
                    current.classList.add("opacity");
                });

                break;
            }
        }
    });
}


// nav left

const nav_left = document.querySelectorAll(".nav-left");
for (let i = 0; i < nav_left.length; i++) {
    const container = nav_left[i].parentElement.previousElementSibling;
    const images = container.children;
    const count = nav_left[i].parentElement.parentElement.nextElementSibling.firstElementChild;

    nav_left[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        for (let j = 0; j < images.length; j++) {
            const value = images[j].className;
            if (value.indexOf("slide-show") >= 0 && j - 1 >= 0) {
                images[j].classList.remove("slide-show");
                count.innerText = j;

                const current = images[j - 1];
                current.classList.add("slide-show");
                current.addEventListener("load", function(e) {
                    const w = current.offsetWidth;
                    const h = current.offsetHeight;
                    if (w > h) {
                        current.style.width = "100%";
                        current.style.height = "auto";
                    } else {
                        current.style.width = "auto";
                        current.style.height = "100%";
                    }
                    current.classList.add("opacity");
                });

                break;
            }
        }
    });
}