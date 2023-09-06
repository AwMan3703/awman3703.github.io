// GRRRR MOBILE BAD RAWRR

function check() {
    const w = visualViewport.width
    const h = visualViewport.height
    if (w < (h / 1.5)) { return true }
    else { return false }
}

function discriminate() {
    if (check()) {
        document.body.innerHTML = ''+
        '<h1>Imagine trying to view this on mobile</h1>'+
        '<h3>Cringe</h3>'+
        ''+
        ''
    }
}

window.addEventListener("resize", () => {
    discriminate()
})