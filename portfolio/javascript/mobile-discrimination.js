// GRRRR MOBILE BAD RAWRR

function check() {
    const w = visualViewport.width
    const h = visualViewport.height
    if (w < h) { return true }
    else { return false }
}

function discriminate() {
    if (check()) {
        document.body.innerHTML = '<p css="font-size: 10vh;">'+
        '<h1>Imagine trying to view this on mobile</h1>'+
        '<h3>Cringe</h3>'+
        '</p>'+
        ''
    }
    console.log("mobile discrimination completed")
}

function mobileDiscrimination() {
    discriminate();

    window.addEventListener("resize", () => {
        discriminate()
    })
}
