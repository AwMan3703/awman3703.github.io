
function compile(className, compileFunction) {
    const elements = document.getElementsByClassName(className);
    for (const e of elements) {
        compileFunction(e);
    }
}

//-------------------------//

function btnHoverSound() {
    playAudio('audio/menu-hover3.wav', 20)
}

//-------------------------//

function compile_elements() {
    compile('button-sound', (e) => { e.onmouseenter = btnHoverSound; })
}