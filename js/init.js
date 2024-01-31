const _all = document.getElementsByTagName("*");

window.onload = function(e) {
    if (check_browser() === "MS") {
        addCss('css/style-ie.css');
        loadScript("./js/script_ie.js");
        loadScript("./js/event_scroll.js");
        loadScript("./js/handle_artist-item.js");
        loadScript("./js/handle_section.js");
        loadScript("./js/handle_menu-item.js");
        loadScript("./js/handle_slide-gallery.js");
    } else {
        loadScript("./js/script.js");
        loadScript("./js/event_scroll.js");
        loadScript("./js/handle_artist-item.js");
        loadScript("./js/handle_section.js");
        loadScript("./js/handle_menu-item.js");
        loadScript("./js/handle_slide-gallery.js");
    }
}


// function
function check_browser() {
    var agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName,
        browser = '';

    if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        browser = 'MS'; // 'ie';
        if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
            agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
            browser = 'MS';
        } else { // IE 11+
            if (agent.indexOf('trident') > -1) { // IE 11
                browser += 11;
                browser = 'MS';
            } else if (agent.indexOf('edge/') > -1) { // Edge
                browser = 'edge';
            }
        }
    } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
        if (agent.indexOf('opr') > -1) { // Opera
            browser = 'opera';
        } else if (agent.indexOf('chrome') > -1) { // Chrome
            browser = 'chrome';
        } else { // Safari
            browser = 'safari';
        }
    } else if (agent.indexOf('firefox') > -1) { // Firefox
        browser = 'firefox';
    } else {
        browser = 'other';
    }

    return browser;
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    // script.async = false;
    document.body.appendChild(script);
}

function addCss(fileName) {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}