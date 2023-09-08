// GRRRR MOBILE BAD RAWRR

function check() {
    const w = visualViewport.width
    const h = visualViewport.height
    if (w < h) { return true }
    else { return false }
}

function discriminate() {
    if (check()) {
        document.body.innerHTML = '<p style="font-size: 10vh;">'+
        '<h1>Imagine trying to view this on mobile</h1>'+
        '<h3>Cringe</h3>'+
        ''+
        ''
    }
}

function mobileDiscrimination() {
    window.addEventListener("resize", () => {
        discriminate()
        console.log("mobile discrimination complete")
    })
}