window.onload = function(ev) {
    const elements = document.body.getElementsByTagName("h1");
    for (const e of elements) {
        e.style.direction = 'rtl';
    }
};