// bar
document.onreadystatechange = function(e) {
    if (document.readyState == "interactive") {
        const all = document.getElementsByTagName("*");
        const max = all.length;
        for (let i = 0; i < max; i++) {
            set_ele();
        }
    }

    if (document.readyState == "complete") {
        const loading = document.querySelector("#loading");
        loading.style.opacity = 0;
        document.body.style.backgroundColor = "rgb(253, 93, 96)";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "scroll";
        setTimeout(function(e) {
            loading.style.display = "none";
        }, 500);
    }
}

let _count = 0;
const bar = document.querySelector("#bar");

function set_ele() {
    _count++;
    // console.log(_count);
    const value = Math.floor(convertRange(_count, [0, 1886], [0, 100]));
    bar.style.width = value + "%";
}

function convertRange(value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}