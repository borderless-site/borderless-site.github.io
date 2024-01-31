// scorll - instagram on/off

const instagram = document.querySelector("#instagram");
const youtube = document.querySelector("#youtube");

window.addEventListener("scroll", function(e) {
    const currentY = window.pageYOffset;
    if (currentY > window.innerHeight / 3) {
        instagram.style.display = "none";
        youtube.style.display = "none";
    } else {
        instagram.style.display = "block";
        youtube.style.display = "block";
    }
});